"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "./CartProvider";

export function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        add(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
    >
      {added ? "Added to bag" : "Add to bag"}
    </button>
  );
}
