import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { brand, collectionArsh, products } from "@/lib/products";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden>
          <div className={styles.gemField}>
            <span className={styles.gem} style={{ ["--g" as string]: "#e8a0bf" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#7b9ecf" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#f2c14e" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#c49bff" }} />
            <span className={styles.gem} style={{ ["--g" as string]: "#7bc47f" }} />
          </div>
          <div className={styles.watercolor} />
        </div>

        <div className={`container ${styles.heroCopy}`}>
          <p className={`eyebrow rise`}>{brand.city} · Fine Jewelry</p>
          <h1 className={`display rise rise-delay-1 ${styles.brand}`}>Roohi</h1>
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

      <section className={styles.mission}>
        <div className="container">
          <p className="eyebrow">Brand mission</p>
          <p className={`display ${styles.missionText}`}>{brand.mission}</p>
        </div>
      </section>
    </>
  );
}
