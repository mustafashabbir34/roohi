import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductBuyBox } from "@/components/ProductBuyBox";
import { ProductDetails } from "@/components/ProductDetails";
import { ProductGallery } from "@/components/ProductGallery";
import { RelatedProducts } from "@/components/RelatedProducts";
import {
  getProduct,
  getRelatedProducts,
  products,
} from "@/lib/products";
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
  const related = getRelatedProducts(product);

  return (
    <>
      <div className={`container ${styles.layout}`}>
        <div>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/collection/arsh", label: "ARSH" },
              { label: product.category },
            ]}
          />
          <ProductGallery product={product} />
        </div>

        <div className={styles.copy}>
          <p className="eyebrow">
            {product.collection} · {product.category}
          </p>
          <h1 className={`display ${styles.title}`}>{product.name}</h1>
          <p className={`script ${styles.tagline}`}>{product.tagline}</p>
          <p className={styles.description}>{product.description}</p>
          <ProductBuyBox product={product} />
          <ProductDetails product={product} />
          <p className={styles.note}>
            Complimentary packaging · Ships from Dubai · Secure Stripe checkout
          </p>
        </div>
      </div>
      <RelatedProducts products={related} />
    </>
  );
}
