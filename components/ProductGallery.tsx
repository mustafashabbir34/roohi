"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { ProductArt } from "./ProductArt";
import styles from "./ProductGallery.module.css";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.images ?? [];
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return <ProductArt product={product} large />;
  }

  const current = images[active] ?? images[0];

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <Image
          src={current}
          alt={`${product.name} — view ${active + 1}`}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 52vw"
          className={styles.mainImg}
        />
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs} role="tablist" aria-label="Product views">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)}
            >
              <Image
                src={src}
                alt={i === 0 ? "Catalogue view" : "Lifestyle view"}
                fill
                sizes="120px"
                className={styles.thumbImg}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
