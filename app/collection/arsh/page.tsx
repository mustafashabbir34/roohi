"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { collectionArsh, products, type Product } from "@/lib/products";
import styles from "./page.module.css";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function ArshCollectionPage() {
  const [sort, setSort] = useState<SortKey>("featured");
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const visible = useMemo(() => {
    let list: Product[] =
      filter === "All" ? [...products] : products.filter((p) => p.category === filter);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.priceAed - b.priceAed);
        break;
      case "price-desc":
        list.sort((a, b) => b.priceAed - a.priceAed);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [filter, sort]);

  return (
    <div className="container">
      <header className={styles.header}>
        <p className="eyebrow">Collection</p>
        <h1 className={`display ${styles.title}`}>{collectionArsh.name}</h1>
        <p className={styles.meaning}>{collectionArsh.meaning}</p>
        <p className={`script ${styles.note}`}>joy · light · love · color · optimism</p>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.filters} role="tablist" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`${styles.chip} ${filter === cat ? styles.chipActive : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <label className={styles.sort}>
          Sort
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price · Low to high</option>
            <option value="price-desc">Price · High to low</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>

      <p className={styles.count}>{visible.length} pieces</p>

      <div className={styles.grid}>
        {visible.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
