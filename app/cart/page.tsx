"use client";

import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import { useCart } from "@/components/CartProvider";
import { formatAed } from "@/lib/products";
import styles from "./page.module.css";

export default function CartPage() {
  const { items, subtotal, setQuantity, remove } = useCart();

  return (
    <div className={`container ${styles.wrap}`}>
      <header className={styles.header}>
        <p className="eyebrow">Your bag</p>
        <h1 className={`display ${styles.title}`}>Bag</h1>
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
              <li key={item.product.id} className={styles.row}>
                <div>
                  <p className={styles.name}>{item.product.name}</p>
                  <p className={styles.meta}>{item.product.materials}</p>
                  <p className={styles.price}>
                    {formatAed(item.product.priceAed)}
                  </p>
                </div>
                <div className={styles.controls}>
                  <label>
                    Qty
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        setQuantity(item.product.id, Number(e.target.value) || 1)
                      }
                    />
                  </label>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => remove(item.product.id)}
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
              Shipping calculated at checkout · AED · Dubai
            </p>
            <CheckoutButton />
          </aside>
        </div>
      )}
    </div>
  );
}
