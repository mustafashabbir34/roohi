"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { formatAed, ringSizes } from "@/lib/products";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";
import styles from "./ProductBuyBox.module.css";

export function ProductBuyBox({ product }: { product: Product }) {
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const [size, setSize] = useState<string>("");
  const [qty, setQty] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const wished = has(product.id);

  const canBuy = useMemo(() => {
    if (product.needsSize) return Boolean(size);
    return true;
  }, [product.needsSize, size]);

  return (
    <div className={styles.box}>
      <p className={styles.price}>{formatAed(product.priceAed)}</p>
      <p className={styles.tax}>Inclusive of VAT where applicable · AED</p>

      {product.needsSize ? (
        <div className={styles.block}>
          <div className={styles.rowLabel}>
            <span>Ring size</span>
            <a href="#size-guide">Size guide</a>
          </div>
          <div className={styles.sizes} role="listbox" aria-label="Ring size">
            {ringSizes.map((s) => (
              <button
                key={s}
                type="button"
                role="option"
                aria-selected={size === s}
                className={`${styles.sizeBtn} ${size === s ? styles.sizeActive : ""}`}
                onClick={() => {
                  setSize(s);
                  setError(null);
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className={styles.block}>
        <span className={styles.label}>Quantity</span>
        <div className={styles.qty}>
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span>{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => Math.min(6, q + 1))}
          >
            +
          </button>
        </div>
      </div>

      {error ? <p className={styles.error}>{error}</p> : null}

      <div className={styles.actions}>
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (product.needsSize && !size) {
              setError("Please select a ring size");
              return;
            }
            add(product, { quantity: qty, size: size || undefined, openDrawer: true });
          }}
        >
          Add to bag
        </button>
        <button
          type="button"
          className={`btn btn-ghost ${styles.wish}`}
          onClick={() => toggle(product.id)}
          aria-pressed={wished}
        >
          {wished ? "Saved" : "Save"}
        </button>
      </div>

      {!canBuy ? (
        <p className={styles.hint}>Select your size to continue — as on Cartier &amp; Tiffany.</p>
      ) : null}
    </div>
  );
}
