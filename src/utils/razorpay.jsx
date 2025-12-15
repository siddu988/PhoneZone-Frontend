// src/utils/razorpay.js
// Pure JS helper — creates backend order then opens Razorpay widget.
// No JSX here!

const BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

/**
 * Load razorpay script dynamically
 * Resolves when script loads, rejects on error.
 */
function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay script"));
    document.body.appendChild(script);
  });
}

/**
 * createOrderOnServer - call backend to create server side order (DB record)
 * and to create a Razorpay order (server uses secret key). Backend should
 * return { razorpayOrder: { id, amount, currency }, orderId: <yourOrderId> }.
 */
async function createOrderOnServer(orderId, amountInRupees) {
  const res = await fetch(`${BASE}/api/razorpay/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderId, amount: amountInRupees }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to create order on server");
  }
  return res.json();
}

/**
 * payWithRazorpay - orderId is your internal order DB id (string),
 * amount is a number in rupees (ex: 1999).
 */
export async function payWithRazorpay(orderId, amount) {
  if (!orderId) throw new Error("Missing orderId");
  await loadRazorpayScript();

  // create order on server and get razorpay order details
  const payload = await createOrderOnServer(orderId, amount);
  const rOrder = payload?.razorpayOrder;
  if (!rOrder || !rOrder.id) throw new Error("Invalid Razorpay order from server");

  // prepare options for Razorpay
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY || "", // public key from env
    amount: rOrder.amount, // in paise (server should return paise)
    currency: rOrder.currency || "INR",
    name: "PhoneZone",
    description: "Order payment",
    order_id: rOrder.id,
    handler: async function (response) {
      // response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature
      // POST to server to verify signature & mark order paid
      await fetch(`${BASE}/api/razorpay/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });
      // The backend should verify signature and respond accordingly.
      // The Checkout page will handle navigation/clearing cart.
    },
    prefill: {
      name: (JSON.parse(localStorage.getItem("phonezoneUser") || "{}").name) || "",
      email: (JSON.parse(localStorage.getItem("phonezoneUser") || "{}").email) || "",
      contact: ""
    },
    theme: { color: "#2563eb" },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}
