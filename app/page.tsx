import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { brand, collectionArsh, products } from "@/lib/products";
import styles from "./page.module.css";

const materials = [
  "18k yellow gold",
  "Natural diamonds",
  "Rainbow sapphires",
  "Pink sapphires",
  "Emeralds",
  "Rubies",
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden>
          <div className={styles.orbit} />
          <div className={styles.gemField}>
            <span className={styles.gem} style={{ ["--g" as string]: "#e5a4bc" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#7a9bc8" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#c9a65a" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#b894e0" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#7bbf8a" }} />
            <span className={`${styles.gem} ${styles.gemSoft}`} style={{ ["--g" as string]: "#f0c9d8" }} />
          </div>
          <div className={styles.watercolor} />
          <div className={styles.vignette} />
        </div>

        <div className={`container ${styles.heroCopy}`}>
          <p className={`eyebrow rise`}>{brand.city} · Fine Jewelry</p>
          <h1 className={`display rise rise-delay-1 ${styles.brand}`}>Roohi</h1>
          <div className={`rise rise-delay-1 ${styles.goldRule}`} aria-hidden />
          <p className={`script rise rise-delay-2 ${styles.meaning}`}>my soul</p>
          <p className={`rise rise-delay-3 ${styles.lead}`}>
            Joyful fine jewelry for everyday life — wearable emotion in 18k gold,
            diamonds, and colorful sapphires.
          </p>
          <div className={`rise rise-delay-3 ${styles.cta}`}>
            <Link href="/collection/arsh" className="btn">
              Discover ARSH
            </Link>
            <Link href="/about" className="btn btn-ghost">
              Our story
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden>
        <div className={styles.marqueeTrack}>
          {[...materials, ...materials].map((item, i) => (
            <span key={`${item}-${i}`} className={styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className={`container ${styles.intro}`}>
        <div>
          <p className="eyebrow">First collection</p>
          <h2 className={`display ${styles.sectionTitle}`}>{collectionArsh.name}</h2>
          <p className={styles.sectionBody}>{collectionArsh.meaning}</p>
        </div>
        <p className={`script ${styles.hand}`}>A beginning · a throne of light</p>
      </section>

      <section className={`container ${styles.grid}`}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </section>

      <section className={styles.poetry}>
        <div className="container">
          <p className={`script ${styles.poetryMark}`}>a note from the atelier</p>
          <p className={`display ${styles.poetryText}`}>
            She does not wait for an occasion.
            <br />
            She becomes one.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <p className="eyebrow">Brand mission</p>
          <p className={`display ${styles.missionText}`}>{brand.mission}</p>
          <p className={styles.missionPlace}>Designed with love in Dubai</p>
        </div>
      </section>
    </>
  );
}
