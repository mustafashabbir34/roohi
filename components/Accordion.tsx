"use client";

import { useState, type ReactNode } from "react";
import styles from "./Accordion.module.css";

type Item = { id: string; title: string; content: ReactNode };

export function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={styles.root}>
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} id={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span>{item.title}</span>
              <span aria-hidden>{open ? "−" : "+"}</span>
            </button>
            {open ? <div className={styles.panel}>{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
