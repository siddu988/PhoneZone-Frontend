// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item._id} className="bg-slate-900 p-4 mb-4 rounded-xl flex items-center gap-4">
          <img src={`/products/${item.image}`} className="w-20 h-20 rounded" />

          <div className="flex-1">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p>₹{item.price}</p>

            <div className="flex items-center gap-3 mt-2">
              <button onClick={() => decreaseQty(item._id)} className="px-3 py-1 bg-slate-700 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item._id)} className="px-3 py-1 bg-slate-700 rounded">+</button>
            </div>
          </div>

          <button onClick={() => removeItem(item._id)} className="bg-red-600 px-4 py-2 rounded">
            Remove
          </button>
        </div>
      ))}

      {/* ⭐ SINGLE BUTTON BELOW */}
      <button
        onClick={() => navigate("/address")}
        className="bg-green-600 px-6 py-3 rounded-lg mr-4"
      >
        Place Order
      </button>

      <button onClick={clearCart} className="bg-blue-600 px-6 py-3 rounded-lg">
        Clear Cart
      </button>
    </div>
  );
}
