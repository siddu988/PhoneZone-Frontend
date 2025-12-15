// src/pages/OrderSuccess.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    if (!state?.order) {
      navigate("/"); 
    } else {
      clearCart();
    }
  }, [state, navigate]);

  if (!state?.order) return null;

  const order = state.order;

  // ⭐ FIXED: Support both formats → address / shippingAddress
  const address = order.address || order.shippingAddress || {};

  // 🆔 Dummy Order ID
  const orderId = "PZ" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-6">

      {/* Success icon */}
      <div className="mt-10 mb-6">
        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-5xl">✓</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-green-400 mb-2">
        Order Placed Successfully!
      </h1>
      <p className="text-slate-300 mb-6">
        Thank you for shopping with PhoneZone.
      </p>

      {/* ORDER DETAILS CARD */}
      <div className="max-w-xl w-full bg-slate-900 p-6 rounded-xl space-y-4 shadow-lg">

        {/* Order ID */}
        <div>
          <p className="text-slate-400">Order ID:</p>
          <p className="text-xl font-bold text-blue-400">{orderId}</p>
        </div>

        {/* Amount Paid – FIXED FIELD */}
        <div>
          <p className="text-slate-400">Amount Paid:</p>
          <p className="text-xl font-bold text-green-400">
            ₹{order.totalAmount}
          </p>
        </div>

        {/* Payment Method */}
        <div>
          <p className="text-slate-400">Payment Method:</p>
          <p className="capitalize font-semibold">{order.paymentMethod}</p>

          {order.paymentMethod === "upi" && (
            <p className="text-slate-300">
              UPI: {order.paymentDetails?.upiId || "N/A"}
            </p>
          )}

          {order.paymentMethod === "card" && (
            <p className="text-slate-300">
              Card: **** **** ****{" "}
              {order.paymentDetails?.cardNumber?.slice(-4) || "0000"}
            </p>
          )}
        </div>

        {/* Delivery Address – FIXED */}
        <div>
          <p className="text-slate-400 mb-1">Delivery Address:</p>
          <p className="text-slate-300">{address.fullName || "N/A"}</p>
          <p className="text-slate-300">{address.house || "N/A"}</p>
          <p className="text-slate-300">
            {address.city || "N/A"}, {address.state || "N/A"} - {address.pin || "N/A"}
          </p>
          <p className="text-slate-300">📞 {address.mobile || "N/A"}</p>
        </div>

        {/* Order Date */}
        <div>
          <p className="text-slate-400">Order Date:</p>
          <p className="text-slate-300">{order.date || "Today"}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => navigate("/account")}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          View Orders
        </button>

        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
