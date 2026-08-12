import { NextResponse } from "next/server";
import { products } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

type BodyItem = { productId: string; quantity: number };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { items?: BodyItem[] };
    const items = body.items ?? [];

    if (!items.length) {
      return NextResponse.json({ error: "Your bag is empty." }, { status: 400 });
    }

    const line_items = items.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        throw new Error(`Unknown product: ${item.productId}`);
      }
      if (!item.quantity || item.quantity < 1) {
        throw new Error(`Invalid quantity for ${product.name}`);
      }

      return {
        quantity: item.quantity,
        price_data: {
          currency: "aed",
          unit_amount: product.priceAed * 100,
          product_data: {
            name: product.name,
            description: `${product.collection} · ${product.materials}`,
          },
        },
      };
    });

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      request.headers.get("origin") ||
      "http://localhost:3000";

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      shipping_address_collection: {
        allowed_countries: ["AE", "SA", "QA", "KW", "BH", "OM", "GB", "US", "FR"],
      },
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      metadata: {
        brand: "Roohi",
        collection: "ARSH",
        city: "Dubai",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to start checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
