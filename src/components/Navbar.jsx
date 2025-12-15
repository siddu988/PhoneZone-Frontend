// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar({ searchTerm = "", onSearchChange = () => {} }) {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 z-40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-sky-400">📱</span>
            <span className="text-xl font-semibold text-sky-300">PhoneZone</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-slate-200">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/products" className="hover:text-white">Products</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="hidden md:block">
            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search phones..."
              className="bg-slate-800/60 rounded-full px-4 py-2 text-slate-100"
            />
          </div>

          {/* CART */}
          <Link to="/cart" className="relative">
            <div className="flex items-center gap-2 bg-slate-800/70 px-3 py-1 rounded text-slate-100">
              <span>🛒</span>
              <span className="text-sm">Cart</span>
            </div>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* USER DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-slate-800/70 px-3 py-1 rounded text-slate-100"
            >
              <div className="w-7 h-7 bg-slate-700 rounded-full flex items-center justify-center">
                {user?.name ? user.name[0] : "U"}
              </div>
              <span className="hidden sm:block">
                {user ? (user.role === "admin" ? "Admin" : "User") : "Guest"}
              </span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-slate-900 border border-slate-800 rounded p-3 text-slate-200">

                {!user && (
                  <>
                    <Link to="/login" className="block py-2 hover:bg-slate-800 rounded">Login</Link>
                    <Link to="/signup" className="block py-2 hover:bg-slate-800 rounded">Signup</Link>
                  </>
                )}

                {user?.role === "user" && (
                  <>
                    <Link to="/account" className="block py-2 hover:bg-slate-800 rounded">My Account</Link>
                    <Link to="/orders" className="block py-2 hover:bg-slate-800 rounded">My Orders</Link>
                  </>
                )}

                {user?.role === "admin" && (
                  <>
                    <Link to="/admin" className="block py-2 hover:bg-slate-800 rounded">Dashboard</Link>
                    <Link to="/admin/products" className="block py-2 hover:bg-slate-800 rounded">Products</Link>
                    <Link to="/admin/orders" className="block py-2 hover:bg-slate-800 rounded">Orders</Link>
                  </>
                )}

                {user && (
                  <button
                    onClick={logout}
                    className="block w-full text-left py-2 hover:bg-slate-800 rounded"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}
