import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/products";
import styles from "./RelatedProducts.module.css";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <p className="eyebrow">You may also love</p>
        <h2 className={`display ${styles.title}`}>Continue the story</h2>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
