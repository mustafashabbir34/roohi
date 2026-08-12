import Stripe from "stripe";

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "Missing STRIPE_SECRET_KEY. Copy .env.example to .env.local and add your Stripe keys."
    );
  }
  return new Stripe(key, {
    apiVersion: "2025-02-24.acacia",
  });
}
