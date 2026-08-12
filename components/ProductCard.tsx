import Image from "next/image";
import Link from "next/link";
import { formatAed, type Product } from "@/lib/products";
import { isStudioProductImage } from "@/lib/imageStyle";
import { ProductArt } from "./ProductArt";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const primary = product.images?.[0];

  return (
    <article
      className={`${styles.card} rise`}
      style={{ animationDelay: `${0.08 * index}s` }}
    >
      <Link href={`/product/${product.slug}`} className={styles.link}>
        <div className={styles.frameWrap}>
          {primary ? (
            <div className={styles.photo}>
              <Image
                src={primary}
                alt={product.name}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className={`${styles.photoImg} ${isStudioProductImage(primary) ? styles.studio : ""}`}
              />
            </div>
          ) : (
            <ProductArt product={product} />
          )}
        </div>
        <div className={styles.meta}>
          <p className={styles.collection}>
            {product.collection} · {product.category}
          </p>
          <h3 className={`display ${styles.name}`}>{product.name}</h3>
          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.price}>{formatAed(product.priceAed)}</p>
          <span className={styles.priceRule} aria-hidden />
        </div>
      </Link>
    </article>
  );
}
