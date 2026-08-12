import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARSH Collection",
  description:
    'Inspired by the Persian meaning of "throne" and the beginning of a journey — joy, light, love, color, and optimism.',
};

export default function ArshLayout({ children }: { children: React.ReactNode }) {
  return children;
}
