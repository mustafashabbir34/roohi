"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";
import styles from "./Header.module.css";

export function Header() {
  const { count } = useCart();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.nav} aria-label="Primary">
          <Link
            href="/collection/arsh"
            className={pathname.includes("/collection") ? styles.active : undefined}
          >
            Collection
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : undefined}
          >
            Story
          </Link>
        </nav>

        <Link href="/" className={styles.brand} aria-label="Roohi home">
          <span className={styles.brandMark}>Roohi</span>
          <span className={styles.brandSub}>Dubai</span>
        </Link>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cart}>
            Bag{count > 0 ? ` (${count})` : ""}
          </Link>
        </div>
      </div>
    </header>
  );
}
