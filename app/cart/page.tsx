"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import { useCart } from "@/components/CartProvider";
import { formatAed } from "@/lib/products";
import styles from "./page.module.css";

export default function CartPage() {
  const { items, subtotal, setQuantity, remove, count } = useCart();

  return (
    <div className={`container ${styles.wrap}`}>
      <header className={styles.header}>
        <p className="eyebrow">Your bag</p>
        <h1 className={`display ${styles.title}`}>Bag {count > 0 ? `(${count})` : ""}</h1>
      </header>

      {items.length === 0 ? (
        <div className={styles.empty}>
          <p>Your bag is waiting for a little color.</p>
          <Link href="/collection/arsh" className="btn">
            Explore ARSH
          </Link>
        </div>
      ) : (
        <div className={styles.layout}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.key} className={styles.row}>
                <Link href={`/product/${item.product.slug}`} className={styles.thumb}>
                  {item.product.images?.[0] ? (
                    <Image
                      src={item.product.images[0]}
                      alt=""
                      fill
                      sizes="96px"
                      className={styles.thumbImg}
                    />
                  ) : null}
                </Link>
                <div>
                  <p className={styles.name}>{item.product.name}</p>
                  {item.size ? <p className={styles.meta}>Size {item.size}</p> : null}
                  <p className={styles.meta}>{item.product.materials}</p>
                  <p className={styles.price}>{formatAed(item.product.priceAed)}</p>
                </div>
                <div className={styles.controls}>
                  <div className={styles.qty}>
                    <button
                      type="button"
                      aria-label="Decrease"
                      onClick={() => setQuantity(item.key, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase"
                      onClick={() => setQuantity(item.key, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => remove(item.key)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <aside className={styles.summary}>
            <p className="eyebrow">Summary</p>
            <p className={styles.subtotal}>
              <span>Subtotal</span>
              <strong>{formatAed(subtotal)}</strong>
            </p>
            <p className={styles.ship}>
              Complimentary packaging · Shipping calculated at checkout · AED · Dubai
            </p>
            <CheckoutButton />
            <Link href="/collection/arsh" className={styles.continue}>
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
