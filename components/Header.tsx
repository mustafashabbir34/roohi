"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import { useWishlist } from "./WishlistProvider";
import styles from "./Header.module.css";

export function Header() {
  const { count, openCart } = useCart();
  const { count: wishCount } = useWishlist();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={styles.nav} aria-label="Primary">
          <Link
            href="/collection/arsh"
            className={pathname.includes("/collection") ? styles.active : undefined}
          >
            Shop
          </Link>
          <Link href="/about" className={pathname === "/about" ? styles.active : undefined}>
            Story
          </Link>
        </nav>

        <Link href="/" className={styles.brand} aria-label="Roohi home">
          <span className={styles.brandMark}>Roohi</span>
          <span className={styles.brandSub}>Dubai</span>
        </Link>

        <div className={styles.actions}>
          <Link href="/wishlist" className={styles.action}>
            Saved{wishCount > 0 ? ` (${wishCount})` : ""}
          </Link>
          <button type="button" className={styles.action} onClick={openCart}>
            Bag{count > 0 ? ` (${count})` : ""}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-nav" className={styles.mobile}>
          <Link href="/collection/arsh">Shop ARSH</Link>
          <Link href="/about">Our story</Link>
          <Link href="/wishlist">Saved</Link>
          <Link href="/cart">Bag</Link>
          <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer">
            WhatsApp concierge
          </a>
        </div>
      ) : null}
    </header>
  );
}
