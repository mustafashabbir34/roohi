"use client";

import { useCart } from "./CartProvider";
import styles from "./Toast.module.css";

export function Toast() {
  const { toast, dismissToast } = useCart();
  if (!toast) return null;

  return (
    <div className={styles.toast} role="status">
      <span>{toast.message}</span>
      <button type="button" onClick={dismissToast} aria-label="Dismiss">
        ×
      </button>
    </div>
  );
}
