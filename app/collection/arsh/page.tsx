import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { collectionArsh, products } from "@/lib/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ARSH Collection",
  description: collectionArsh.meaning,
};

export default function ArshCollectionPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <p className="eyebrow">Collection</p>
        <h1 className={`display ${styles.title}`}>{collectionArsh.name}</h1>
        <p className={styles.meaning}>{collectionArsh.meaning}</p>
        <p className={`script ${styles.note}`}>joy · light · love · color · optimism</p>
      </header>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
