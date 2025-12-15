// src/pages/Checkout.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import api from "../utils/api";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const [payment, setPayment] = useState("cod");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [error, setError] = useState("");

  const address = {
    fullName: localStorage.getItem("addr_name"),
    mobile: localStorage.getItem("addr_phone"),
    house: localStorage.getItem("addr_street"),
    city: localStorage.getItem("addr_city"),
    state: localStorage.getItem("addr_state"),
    pin: localStorage.getItem("addr_pin"),
  };

  // validate inputs
  const validate = () => {
    if (payment === "upi" && !upiId.includes("@"))
      return "Enter valid UPI ID";

    if (payment === "card") {
      if (cardNumber.length !== 16)
        return "Card number must be 16 digits";
      if (cardExpiry.length < 4)
        return "Enter expiry MM/YY";
      if (cardCvv.length !== 3)
        return "CVV must be 3 digits";
    }
    return "";
  };

  // ⭐ PLACE ORDER
  const placeOrder = async () => {
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    // FIXED TOKEN KEY
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login to place an order");
      return;
    }

    const orderData = {
      items: cartItems.map((i) => ({
        productId: i._id,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        image: i.image,
      })),
      totalAmount: total,
      paymentMethod: payment,
      shippingAddress: address,
    };

    try {
      // FIXED → api.post takes ONLY 2 args
      const res = await api.post("/orders", orderData);

      if (!res.order) {
        setError("Order failed. Try again.");
        return;
      }

      clearCart();
      navigate("/order-success", { state: { order: res.order } });
    } catch (err) {
      console.log(err);
      setError("Order failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="max-w-2xl bg-slate-900 p-6 rounded-xl space-y-6">

        <div>
          <h2 className="text-xl font-bold mb-2">Delivery Address</h2>
          <div className="text-slate-300">
            <p>{address.fullName}</p>
            <p>{address.house}</p>
            <p>{address.city}, {address.state} - {address.pin}</p>
            <p>📞 {address.mobile}</p>
          </div>
        </div>

        <hr className="border-slate-700" />

        <h2 className="text-xl font-bold">Order Total: ₹{total}</h2>

        {error && <p className="text-red-400">{error}</p>}

        {/* Payment section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Select Payment Method</h2>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={payment === "upi"}
              onChange={() => setPayment("upi")}
            />
            UPI (GPay / PhonePe)
          </label>

          {payment === "upi" && (
            <input
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="yourname@upi"
              className="w-full p-2 bg-slate-800 rounded"
            />
          )}

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={payment === "card"}
              onChange={() => setPayment("card")}
            />
            Credit / Debit Card
          </label>

          {payment === "card" && (
            <div className="space-y-2">
              <input
                maxLength={16}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 bg-slate-800 rounded"
                placeholder="Card Number"
              />
              <input
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                className="w-full p-2 bg-slate-800 rounded"
                placeholder="MM/YY"
              />
              <input
                maxLength={3}
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                className="w-full p-2 bg-slate-800 rounded"
                placeholder="CVV"
              />
            </div>
          )}
        </div>

        <button
          onClick={placeOrder}
          className="w-full bg-green-600 py-3 rounded-lg hover:bg-green-500 text-lg font-semibold"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
