"use client";

import Image from "next/image";
import Link from "next/link";
import { formatAed } from "@/lib/products";
import { isStudioProductImage } from "@/lib/imageStyle";
import { useCart } from "./CartProvider";
import styles from "./MiniCart.module.css";

export function MiniCart() {
  const { items, subtotal, isCartOpen, closeCart, setQuantity, remove, count } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className={styles.root} role="dialog" aria-modal="true" aria-label="Shopping bag">
      <button type="button" className={styles.backdrop} aria-label="Close bag" onClick={closeCart} />
      <aside className={styles.panel}>
        <header className={styles.header}>
          <div>
            <p className="eyebrow">Your bag</p>
            <h2 className={`display ${styles.title}`}>Bag ({count})</h2>
          </div>
          <button type="button" className={styles.close} onClick={closeCart}>
            Close
          </button>
        </header>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your bag is waiting for a little color.</p>
            <Link href="/collection/arsh" className="btn" onClick={closeCart}>
              Explore ARSH
            </Link>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.key} className={styles.row}>
                  <Link
                    href={`/product/${item.product.slug}`}
                    className={styles.thumb}
                    onClick={closeCart}
                  >
                    {item.product.images?.[0] ? (
                      <Image
                        src={item.product.images[0]}
                        alt=""
                        fill
                        sizes="72px"
                        className={`${styles.thumbImg} ${isStudioProductImage(item.product.images[0]) ? styles.studio : ""}`}
                      />
                    ) : null}
                  </Link>
                  <div className={styles.meta}>
                    <Link href={`/product/${item.product.slug}`} onClick={closeCart}>
                      <p className={styles.name}>{item.product.name}</p>
                    </Link>
                    {item.size ? <p className={styles.size}>Size {item.size}</p> : null}
                    <p className={styles.price}>{formatAed(item.product.priceAed)}</p>
                    <div className={styles.qty}>
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className={styles.remove}
                        onClick={() => remove(item.key)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className={styles.footer}>
              <p className={styles.subtotal}>
                <span>Subtotal</span>
                <strong>{formatAed(subtotal)}</strong>
              </p>
              <p className={styles.note}>Shipping &amp; taxes calculated at checkout · AED</p>
              <Link href="/cart" className="btn" onClick={closeCart}>
                View bag &amp; checkout
              </Link>
              <button type="button" className={`btn btn-ghost ${styles.continue}`} onClick={closeCart}>
                Continue shopping
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
