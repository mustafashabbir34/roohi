import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, Outfit } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display-var",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body-var",
});

const script = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-script-var",
});

export const metadata: Metadata = {
  title: {
    default: "Roohi — Fine Jewelry from Dubai",
    template: "%s · Roohi",
  },
  description:
    "Joyful fine jewelry in 18k yellow gold, natural diamonds, and colorful sapphires. Wearable emotion for everyday life. Dubai.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const fontVars = {
    ["--font-display"]: "var(--font-display-var), 'Times New Roman', serif",
    ["--font-body"]: "var(--font-body-var), 'Segoe UI', sans-serif",
    ["--font-script"]: "var(--font-script-var), cursive",
  } as CSSProperties;

  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${script.variable}`}
        style={fontVars}
      >
        <CartProvider>
          <div className="site-shell">
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
