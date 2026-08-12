import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGallery } from "@/components/ProductGallery";
import { formatAed, getProduct, products } from "@/lib/products";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece not found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className={`container ${styles.layout}`}>
      <ProductGallery product={product} />
      <div className={styles.copy}>
        <p className="eyebrow">{product.collection}</p>
        <h1 className={`display ${styles.title}`}>{product.name}</h1>
        <p className={`script ${styles.tagline}`}>{product.tagline}</p>
        <p className={styles.price}>{formatAed(product.priceAed)}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.materials}>{product.materials}</p>
        <div className={styles.actions}>
          <AddToCartButton product={product} />
          <Link href="/collection/arsh" className="btn btn-ghost">
            Back to ARSH
          </Link>
        </div>
        <p className={styles.note}>
          Ships from Dubai · Prices in AED · Secure checkout via Stripe
        </p>
      </div>
    </div>
  );
}
