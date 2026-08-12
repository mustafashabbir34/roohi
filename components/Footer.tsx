import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.mark}>Roohi</p>
          <p className={`script ${styles.note}`}>my soul · Dubai</p>
        </div>
        <div className={styles.links}>
          <Link href="/collection/arsh">ARSH Collection</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/cart">Bag</Link>
        </div>
        <p className={styles.copy}>
          Fine jewelry in 18k yellow gold, natural diamonds &amp; colorful
          sapphires. Designed for everyday joy.
        </p>
      </div>
    </footer>
  );
}
