import Link from "next/link";
import { formatAed, type Product } from "@/lib/products";
import { ProductArt } from "./ProductArt";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article
      className={`${styles.card} rise`}
      style={{ animationDelay: `${0.08 * index}s` }}
    >
      <Link href={`/product/${product.slug}`} className={styles.link}>
        <ProductArt product={product} />
        <div className={styles.meta}>
          <p className={styles.collection}>{product.collection}</p>
          <h3 className={`display ${styles.name}`}>{product.name}</h3>
          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.price}>{formatAed(product.priceAed)}</p>
        </div>
      </Link>
    </article>
  );
}
