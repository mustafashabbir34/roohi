import Link from "next/link";
import { brand } from "@/lib/products";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.mark}>Roohi</p>
          <p className={`script ${styles.note}`}>my soul · Dubai</p>
          <p className={styles.blurb}>
            Joyful fine jewelry for everyday life — wearable emotion in 18k gold,
            diamonds, and colorful sapphires.
          </p>
        </div>

        <div className={styles.cols}>
          <div>
            <p className={styles.heading}>Explore</p>
            <Link href="/collection/arsh">ARSH Collection</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/wishlist">Saved</Link>
            <Link href="/cart">Bag</Link>
          </div>
          <div>
            <p className={styles.heading}>Client care</p>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
              WhatsApp concierge
            </a>
            <p className={styles.care}>Complimentary shipping guidance · AED pricing</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
