import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Roohi means my soul. Joyful fine jewelry from Dubai — elegant, playful, and made for self-celebration.",
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <p className="eyebrow">Our story</p>
        <h1 className={`display ${styles.title}`}>Roohi</h1>
        <p className={`script ${styles.meaning}`}>my soul</p>
      </header>

      <div className={styles.grid}>
        <section>
          <h2 className={`display ${styles.h2}`}>A wearable emotion</h2>
          <p>
            Roohi creates joyful fine jewelry that becomes part of everyday life.
            Each piece is meant to feel intimate and alive — not waiting for an
            occasion, but celebrating the woman who wears it.
          </p>
          <p>
            Born in Dubai, the brand lives at the meeting point of quiet luxury and
            color: Cartier elegance, Van Cleef poetry, Loewe creativity, Jacquemus
            playfulness — and modern femininity.
          </p>
        </section>

        <section>
          <h2 className={`display ${styles.h2}`}>Materials</h2>
          <ul className={styles.list}>
            <li>18k yellow gold</li>
            <li>Natural diamonds</li>
            <li>Natural colorful sapphires</li>
            <li>Occasionally emeralds and rubies</li>
          </ul>
          <p className={`script ${styles.aside}`}>
            For women who buy jewelry to celebrate themselves.
          </p>
        </section>
      </div>
    </div>
  );
}
