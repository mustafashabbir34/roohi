"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { cartLineId, products, type Product } from "@/lib/products";

export type CartItem = {
  key: string;
  product: Product;
  quantity: number;
  size?: string;
};

type Toast = { id: number; message: string } | null;

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isCartOpen: boolean;
  toast: Toast;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  add: (
    product: Product,
    options?: { quantity?: number; size?: string; openDrawer?: boolean }
  ) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
  dismissToast: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "roohi-cart-v2";

type StoredItem = {
  productId: string;
  quantity: number;
  size?: string;
};

function hydrate(stored: StoredItem[]): CartItem[] {
  const hydrated: CartItem[] = [];
  for (const row of stored) {
    const product = products.find((p) => p.id === row.productId);
    if (!product) continue;
    hydrated.push({
      key: cartLineId(product.id, row.size),
      product,
      quantity: row.quantity,
      size: row.size,
    });
  }
  return hydrated;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(hydrate(JSON.parse(raw) as StoredItem[]));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const payload: StoredItem[] = items.map((i) => ({
      productId: i.product.id,
      quantity: i.quantity,
      size: i.size,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [items, ready]);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToast({ id, message });
    window.setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 2400);
  }, []);

  const add = useCallback(
    (
      product: Product,
      options?: { quantity?: number; size?: string; openDrawer?: boolean }
    ) => {
      const quantity = options?.quantity ?? 1;
      const size = options?.size;
      const key = cartLineId(product.id, size);

      setItems((prev) => {
        const existing = prev.find((i) => i.key === key);
        if (existing) {
          return prev.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          );
        }
        return [...prev, { key, product, quantity, size }];
      });

      showToast(`${product.name} added to bag`);
      if (options?.openDrawer !== false) setCartOpen(true);
    },
    [showToast]
  );

  const remove = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, quantity: Math.max(0, quantity) } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, i) => n + i.quantity, 0);
    const subtotal = items.reduce((n, i) => n + i.product.priceAed * i.quantity, 0);
    return {
      items,
      count,
      subtotal,
      isCartOpen,
      toast,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      toggleCart: () => setCartOpen((v) => !v),
      add,
      remove,
      setQuantity,
      clear,
      dismissToast: () => setToast(null),
    };
  }, [items, isCartOpen, toast, add, remove, setQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
