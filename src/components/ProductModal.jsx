import React from "react";
import { X } from "lucide-react";

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const imgSrc = product?.image || "/src/assets/images/placeholder.png";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-w-3xl w-full bg-slate-900 rounded-2xl shadow-xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-2 rounded-full bg-slate-800 hover:bg-slate-700"
          aria-label="close"
        >
          <X />
        </button>

        <div className="md:flex">
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <img src={imgSrc} alt={product.name} className="max-h-80 object-contain rounded-lg" />
          </div>

          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-slate-300 mb-4">{product.desc || product.short || ""}</p>
            <div className="text-xl font-bold mb-4">₹{product.price}</div>

            <div className="flex gap-3">
              <button
                onClick={() => onAddToCart(product)}
                className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500"
              >
                Add to cart
              </button>

              <button
                onClick={onClose}
                className="bg-transparent text-slate-300 px-4 py-2 rounded-full border border-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
