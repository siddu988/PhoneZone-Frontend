// src/pages/Products.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";

export default function Products() {
  const [items, setItems] = useState([]);
  const { addItem } = useCart();

  // Search term comes from Navbar via URL
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    async function load() {
      try {
        const data = await api.get("/products");
        setItems(data);
      } catch (err) {
        console.log("Products fetch error:", err);
      }
    }
    load();
  }, []);

  const filtered = items.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-white px-8 py-6 min-h-screen bg-slate-900">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Popular Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((p) => {
          const img = p.image.startsWith("/products")
            ? p.image
            : `/products/${p.image}`;

          return (
            <div key={p._id} className="bg-slate-800 p-5 rounded-lg shadow-md">

              <img src={img} className="h-40 w-full object-contain mb-4" />

              <h2 className="font-semibold">{p.name}</h2>
              <p className="text-blue-300">₹{p.price}</p>

              <div className="flex justify-between mt-3">
                <button
                  onClick={() => addItem(p)}
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
                >
                  Add to Cart
                </button>

                <Link
                  to={`/products/${p._id}`}
                  className="border px-4 py-2 rounded"
                >
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
