"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/components/WishlistProvider";
import { formatAed, products } from "@/lib/products";
import { isStudioProductImage } from "@/lib/imageStyle";
import styles from "./page.module.css";

export default function WishlistPage() {
  const { ids, toggle } = useWishlist();
  const saved = products.filter((p) => ids.includes(p.id));

  return (
    <div className={`container ${styles.wrap}`}>
      <header className={styles.header}>
        <p className="eyebrow">Wishlist</p>
        <h1 className={`display ${styles.title}`}>Saved</h1>
        <p className={styles.lead}>Pieces you are holding close — ready when you are.</p>
      </header>

      {saved.length === 0 ? (
        <div className={styles.empty}>
          <p>Nothing saved yet. Explore ARSH and tap Save on pieces you love.</p>
          <Link href="/collection/arsh" className="btn">
            Explore ARSH
          </Link>
        </div>
      ) : (
        <ul className={styles.list}>
          {saved.map((product) => (
            <li key={product.id} className={styles.row}>
              <Link href={`/product/${product.slug}`} className={styles.thumb}>
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt=""
                    fill
                    sizes="110px"
                    className={`${styles.thumbImg} ${isStudioProductImage(product.images[0]) ? styles.studio : ""}`}
                  />
                ) : null}
              </Link>
              <div>
                <p className={styles.cat}>{product.category}</p>
                <Link href={`/product/${product.slug}`}>
                  <h2 className={`display ${styles.name}`}>{product.name}</h2>
                </Link>
                <p className={styles.price}>{formatAed(product.priceAed)}</p>
              </div>
              <div className={styles.actions}>
                <Link href={`/product/${product.slug}`} className="btn">
                  View
                </Link>
                <button type="button" className={styles.remove} onClick={() => toggle(product.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
