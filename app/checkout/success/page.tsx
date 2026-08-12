"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/components/CartProvider";
import styles from "./page.module.css";

export default function CheckoutSuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className={`container ${styles.wrap}`}>
      <p className="eyebrow">Thank you</p>
      <h1 className={`display ${styles.title}`}>Your piece is on its way to joy</h1>
      <p className={`script ${styles.note}`}>A little light, chosen for yourself.</p>
      <p className={styles.body}>
        Payment received. You’ll get a confirmation email from Stripe. We pack from
        Dubai with care.
      </p>
      <div className={styles.actions}>
        <Link href="/collection/arsh" className="btn">
          Continue browsing ARSH
        </Link>
        <a
          className="btn btn-ghost"
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp concierge
        </a>
      </div>
    </div>
  );
}
