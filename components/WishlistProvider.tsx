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

type WishlistContextValue = {
  ids: string[];
  count: number;
  has: (productId: string) => boolean;
  toggle: (productId: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "roohi-wishlist-v1";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, ready]);

  const has = useCallback((productId: string) => ids.includes(productId), [ids]);

  const toggle = useCallback((productId: string) => {
    setIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const value = useMemo(
    () => ({ ids, count: ids.length, has, toggle }),
    [ids, has, toggle]
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
