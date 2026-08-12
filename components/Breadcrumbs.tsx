import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className={styles.item}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
