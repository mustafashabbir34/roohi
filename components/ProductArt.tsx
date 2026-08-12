import type { CSSProperties } from "react";
import type { Product } from "@/lib/products";
import styles from "./ProductArt.module.css";

export function ProductArt({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  const [a, b, c, d] = [
    product.accents[0],
    product.accents[1] ?? product.accent,
    product.accents[2] ?? product.accent,
    product.accents[3] ?? product.accents[0],
  ];

  const vars = {
    "--a": a,
    "--b": b,
    "--c": c,
    "--d": d,
  } as CSSProperties;

  return (
    <div
      className={`${styles.frame} ${large ? styles.large : ""}`}
      style={vars}
      aria-hidden
    >
      <div className={styles.wash} />
      <div className={`${styles.piece} ${styles[product.shape]}`}>
        {product.shape === "bracelet" && (
          <>
            <span className={styles.row} />
            <span className={`${styles.row} ${styles.row2}`} />
            <span className={`${styles.row} ${styles.row3}`} />
          </>
        )}
        {product.shape === "ring-heart" && <span className={styles.heart} />}
        {product.shape === "earrings" && (
          <>
            <span className={styles.drop} />
            <span className={`${styles.drop} ${styles.drop2}`} />
          </>
        )}
        {product.shape === "ring-butterfly" && <span className={styles.butterfly} />}
        {product.shape === "necklace" && (
          <>
            <span className={styles.chain} />
            <span className={styles.pendant} />
          </>
        )}
      </div>
      <p className={`script ${styles.sketch}`}>atelier sketch</p>
    </div>
  );
}
