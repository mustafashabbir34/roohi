export type ProductShape =
  | "bracelet"
  | "ring-heart"
  | "earrings"
  | "ring-butterfly"
  | "necklace";

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
  shape: ProductShape;
  /** Catalogue first, lifestyle second when present */
  images?: string[];
  category: "Bracelet" | "Ring" | "Earrings" | "Necklace";
  needsSize: boolean;
  details: string[];
};

export const brand = {
  name: "Roohi",
  meaning: "my soul",
  city: "Dubai",
  currency: "AED" as const,
  whatsapp: "971500000000",
  email: "hello@roohi.ae",
  mission:
    "Create joyful fine jewelry that becomes part of everyday life. Every piece should feel like a wearable emotion rather than just an accessory.",
};

export const collectionArsh = {
  name: "ARSH",
  meaning:
    'Inspired by the Persian meaning of "throne" and the beginning of a journey — joy, light, love, color, and optimism.',
};

/** UAE / international ring sizes commonly offered by fine jewelers */
export const ringSizes = ["48", "50", "52", "54", "56", "58"] as const;

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
    category: "Bracelet",
    needsSize: false,
    images: ["/products/bracelet-1.png", "/products/bracelet-2.png"],
    details: [
      "Triple-row tennis silhouette with rainbow sapphire gradient",
      "Diamond columns for rhythm and light",
      "Secure box clasp with double safety catches",
      "Hand-finished in the Roohi atelier spirit",
    ],
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
    category: "Ring",
    needsSize: true,
    images: ["/products/heart-ring-1.png", "/products/heart-ring-2.png"],
    details: [
      "Heart-cut pink sapphire center",
      "Diamond halo for soft brilliance",
      "Split shank with pavé diamonds",
      "Made to order in your selected size",
    ],
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
    category: "Earrings",
    needsSize: false,
    images: ["/products/earrings-1.png", "/products/earrings-2.png"],
    details: [
      "Vertical rainbow sapphire drops",
      "Pavé huggie hoops for secure wear",
      "Lightweight for everyday joy",
      "Sold as a pair",
    ],
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
    category: "Ring",
    needsSize: true,
    images: ["/products/butterfly-ring-1.png"],
    details: [
      "Sculpted butterfly motif with pink sapphire wings",
      "Diamond accents along the body and shank",
      "Romantic split-shank silhouette",
      "Made to order in your selected size",
    ],
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
    category: "Necklace",
    needsSize: false,
    images: ["/products/necklace-1.png", "/products/necklace-2.png"],
    details: [
      "Station necklace with rainbow sapphire gradient",
      "Central diamond trio for quiet focus",
      "Fine chain designed for daily wear",
      "Adjustable clasp for an intimate fit",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products.filter((p) => p.id !== product.id).slice(0, limit);
}

export function formatAed(amount: number) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function cartLineId(productId: string, size?: string) {
  return `${productId}::${size ?? "os"}`;
}
