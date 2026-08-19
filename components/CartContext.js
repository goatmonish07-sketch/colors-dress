"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "colors-dress-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addItem = (product, { size, color, qty = 1 } = {}) => {
    setItems((prev) => {
      const key = `${product.slug}-${size || ""}-${color || ""}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          key,
          slug: product.slug,
          name: product.name,
          price: product.price,
          mrp: product.mrp,
          image: product.images[0],
          size: size || product.sizes[0],
          color: color || product.colors[0],
          qty,
        },
      ];
    });
  };

  const updateQty = (key, qty) =>
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0)
    );

  const removeItem = (key) =>
    setItems((prev) => prev.filter((i) => i.key !== key));

  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0);
  const mrpTotal = items.reduce((n, i) => n + i.mrp * i.qty, 0);
  const discount = mrpTotal - subtotal;

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQty, removeItem, clear, count, subtotal, mrpTotal, discount, ready }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
