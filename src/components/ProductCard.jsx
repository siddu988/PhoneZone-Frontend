// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product, onAddToCart = () => {}, onView = () => {} }) {
  const price = product.price ?? product.priceInRs ?? product.amount ?? 0;

  return (
    <div className="bg-slate-900/60 p-6 rounded-lg shadow-inner">
      <div className="h-44 mb-4 flex items-center justify-center">
        <img src={product.image || product.images?.[0] || "/assets/images/hero-bg.jpg"} alt={product.title || product.name} className="max-h-40 object-contain" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{product.name || product.title}</h3>
      <p className="text-slate-400 mb-3">₹{price}</p>
      <div className="flex gap-3">
        <button onClick={() => onAddToCart(product)} className="bg-sky-500 px-3 py-2 rounded-md text-white">Add to Cart</button>
        <button onClick={() => onView(product)} className="border border-slate-700 px-3 py-2 rounded-md text-slate-200">View</button>
      </div>
    </div>
  );
}
