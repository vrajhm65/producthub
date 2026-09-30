import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductById } from "../data/products.js";

const CartContext = createContext(null);
const STORAGE_KEY = "producthub-cart-v1";

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((i) => i && getProductById(i.id))
      .map((i) => ({ id: String(i.id), qty: Math.max(1, Math.min(99, Number(i.qty) || 1)) }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works in memory
    }
  }, [items]);

  const value = useMemo(() => {
    const add = (id, qty = 1) => {
      const pid = String(id);
      if (!getProductById(pid)) return;
      setItems((prev) => {
        const found = prev.find((i) => i.id === pid);
        if (found) {
          return prev.map((i) =>
            i.id === pid ? { ...i, qty: Math.min(99, i.qty + qty) } : i
          );
        }
        return [...prev, { id: pid, qty: Math.max(1, Math.min(99, qty)) }];
      });
    };
    const remove = (id) =>
      setItems((prev) => prev.filter((i) => i.id !== String(id)));
    const setQty = (id, qty) => {
      const q = Number(qty);
      if (!Number.isFinite(q) || q < 1) return remove(id);
      setItems((prev) =>
        prev.map((i) =>
          i.id === String(id) ? { ...i, qty: Math.max(1, Math.min(99, Math.floor(q))) } : i
        )
      );
    };
    const inc = (id) => add(id, 1);
    const dec = (id) =>
      setItems((prev) =>
        prev
          .map((i) => (i.id === String(id) ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0)
      );
    const clear = () => setItems([]);

    const detailed = items
      .map((i) => ({ ...i, product: getProductById(i.id) }))
      .filter((i) => i.product);
    const count = detailed.reduce((n, i) => n + i.qty, 0);
    const subtotal = detailed.reduce((n, i) => n + i.qty * i.product.price, 0);

    return { items: detailed, count, subtotal, add, remove, setQty, inc, dec, clear };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
