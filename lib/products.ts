export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: "ARSH";
  tagline: string;
  description: string;
  materials: string;
  priceAed: number;
  accent: string;
  accents: string[];
  shape: "bracelet" | "ring-heart" | "earrings" | "ring-butterfly" | "necklace";
  /** Catalogue first, lifestyle second when present */
  images?: string[];
};

export const brand = {
  name: "Roohi",
  meaning: "my soul",
  city: "Dubai",
  currency: "AED" as const,
  mission:
    "Create joyful fine jewelry that becomes part of everyday life. Every piece should feel like a wearable emotion rather than just an accessory.",
};

export const collectionArsh = {
  name: "ARSH",
  meaning:
    'Inspired by the Persian meaning of "throne" and the beginning of a journey — joy, light, love, color, and optimism.',
};

export const products: Product[] = [
  {
    id: "arsh-tennis",
    slug: "triple-row-rainbow-sapphire-tennis-bracelet",
    name: "Triple-Row Rainbow Sapphire Tennis Bracelet",
    collection: "ARSH",
    tagline: "A ribbon of light for the wrist",
    description:
      "Three luminous rows of natural rainbow sapphires set in 18k yellow gold. Worn close to the pulse — a quiet celebration of color, joy, and everyday radiance.",
    materials: "18k yellow gold · Natural rainbow sapphires · Natural diamonds",
    priceAed: 28500,
    accent: "#7B9ECF",
    accents: ["#E8A0BF", "#F2C14E", "#7BC47F", "#7B9ECF", "#C49BFF"],
    shape: "bracelet",
    images: ["/products/bracelet-1.png", "/products/bracelet-2.png"],
  },
  {
    id: "arsh-heart",
    slug: "heart-shaped-pink-sapphire-ring",
    name: "Heart-Shaped Pink Sapphire Ring",
    collection: "ARSH",
    tagline: "A soft declaration to yourself",
    description:
      "A heart-cut pink sapphire held in warm 18k yellow gold — intimate, feminine, and meant to be worn as a daily reminder of self-celebration.",
    materials: "18k yellow gold · Natural pink sapphire · Natural diamonds",
    priceAed: 12500,
    accent: "#E8A0BF",
    accents: ["#E8A0BF", "#F6D6E3", "#D4A017"],
    shape: "ring-heart",
    images: ["/products/heart-ring-1.png", "/products/heart-ring-2.png"],
  },
  {
    id: "arsh-earrings",
    slug: "rainbow-sapphire-earrings",
    name: "Rainbow Sapphire Earrings",
    collection: "ARSH",
    tagline: "Color that catches the light",
    description:
      "Playful yet refined drops of natural colorful sapphires in 18k yellow gold. Editorial sparkle for mornings in Dubai and evenings that linger.",
    materials: "18k yellow gold · Natural colorful sapphires",
    priceAed: 9800,
    accent: "#C49BFF",
    accents: ["#E8A0BF", "#F2C14E", "#7B9ECF", "#C49BFF"],
    shape: "earrings",
    images: ["/products/earrings-1.png", "/products/earrings-2.png"],
  },
  {
    id: "arsh-butterfly",
    slug: "minimal-butterfly-ring",
    name: "Minimal Butterfly Ring",
    collection: "ARSH",
    tagline: "Lightness, made lasting",
    description:
      "A minimal butterfly silhouette in 18k yellow gold — delicate, modern, and quietly joyful. A piece that feels like a handwritten note on the hand.",
    materials: "18k yellow gold · Natural diamonds · Occasional sapphire accents",
    priceAed: 6200,
    accent: "#D4A017",
    accents: ["#D4A017", "#F5E6C8", "#7B9ECF"],
    shape: "ring-butterfly",
    images: ["/products/butterfly-ring-1.png"],
  },
  {
    id: "arsh-necklace",
    slug: "delicate-colorful-sapphire-necklace",
    name: "Delicate Colorful Sapphire Necklace",
    collection: "ARSH",
    tagline: "Joy resting at the collarbone",
    description:
      "A fine chain of colorful sapphires and diamonds in 18k yellow gold — soft enough for every day, luminous enough for moments that matter.",
    materials: "18k yellow gold · Natural colorful sapphires · Natural diamonds",
    priceAed: 8400,
    accent: "#7BC47F",
    accents: ["#E8A0BF", "#7BC47F", "#7B9ECF", "#F2C14E"],
    shape: "necklace",
    images: ["/products/necklace-1.png", "/products/necklace-2.png"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatAed(amount: number) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(amount);
}
