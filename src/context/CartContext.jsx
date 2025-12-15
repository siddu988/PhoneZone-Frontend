// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load from localStorage on start
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pz_cart")) || [];
    } catch {
      return [];
    }
  });

  // Keep localStorage updated
  useEffect(() => {
    localStorage.setItem("pz_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Helper to update state + localStorage
  const save = (items) => {
    setCartItems(items);
    localStorage.setItem("pz_cart", JSON.stringify(items));
  };

  // Add item to cart
  const addItem = (product) => {
    const exists = cartItems.find((p) => p._id === product._id);

    if (exists) {
      return save(
        cartItems.map((p) =>
          p._id === product._id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        )
      );
    }

    return save([...cartItems, { ...product, quantity: 1 }]);
  };

  // Increase quantity
  const increaseQty = (id) => {
    save(
      cartItems.map((p) =>
        p._id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    save(
      cartItems
        .map((p) =>
          p._id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    save(cartItems.filter((p) => p._id !== id));
  };

  // Clear all
  const clearCart = () => save([]);

  // Live cart count
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
