// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Simple main entry — mounts App without extra context imports.
 * If you previously had: import { CartProvider } from "./context/CartContext";
 * but CartContext file doesn't exist, Vite will fail with a blank page.
 *
 * Use this simple entry to get running, then we can add context back.
 */

const container = document.getElementById("root");
if (!container) {
  // if root element missing, create one (defensive)
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  createRoot(el).render(<App />);
} else {
  createRoot(container).render(<App />);
}
