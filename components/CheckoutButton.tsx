"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export function CheckoutButton() {
  const { items } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.product.id,
            quantity: i.quantity,
          })),
        }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn"
        disabled={loading || items.length === 0}
        onClick={checkout}
      >
        {loading ? "Opening checkout…" : "Checkout with Stripe"}
      </button>
      {error ? (
        <p style={{ color: "#8a3b3b", marginTop: "0.75rem", maxWidth: "28rem" }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
