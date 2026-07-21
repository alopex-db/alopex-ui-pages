import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const image = new URL("/og-duckdb.png", origin).toString();
  return {
    metadataBase: new URL(origin),
    title: "Alopex Data UI",
    description: "Data Application Components for AlopexDB and DuckDB",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { type: "website", siteName: "Alopex Data UI", title: "Change the data engine. Keep the application model.", description: "One stable application model for AlopexDB and DuckDB.", images: [{ url: image, width: 1734, height: 907, alt: "Alopex Data UI with swappable AlopexDB and DuckDB adapters" }] },
    twitter: { card: "summary_large_image", title: "Alopex Data UI", description: "Data Application Components for AlopexDB and DuckDB", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
