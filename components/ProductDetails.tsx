"use client";

import { Accordion } from "./Accordion";
import type { Product } from "@/lib/products";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <Accordion
      items={[
        {
          id: "details",
          title: "Details",
          content: (
            <ul>
              {product.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ),
        },
        {
          id: "materials",
          title: "Materials & craft",
          content: (
            <p>
              {product.materials}. Each Roohi piece is conceived as a wearable
              emotion — joyful fine jewelry meant for everyday life.
            </p>
          ),
        },
        {
          id: "shipping",
          title: "Shipping & returns",
          content: (
            <p>
              Ships from Dubai with tracked delivery. Pricing in AED. Secure
              checkout via Stripe. For sizing exchanges or concierge questions,
              message us on WhatsApp — we are here to help you celebrate yourself.
            </p>
          ),
        },
        {
          id: "size-guide",
          title: "Size guide",
          content: product.needsSize ? (
            <div id="size-guide">
              <p>
                Ring sizes follow European circumference (mm). Unsure? Choose the
                closest size and our Dubai concierge will confirm before
                production, or WhatsApp us a photo of a well-fitting ring’s inner
                diameter.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Common sizes: 48 · 50 · 52 · 54 · 56 · 58
              </p>
            </div>
          ) : (
            <p>This piece is one size / adjustable for an intimate everyday fit.</p>
          ),
        },
      ]}
    />
  );
}
