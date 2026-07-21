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
  const image = new URL("/og.png", origin).toString();
  return {
    metadataBase: new URL(origin),
    title: "Alopex Data UI",
    description: "Data Application Components for AlopexDB",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { type: "website", siteName: "Alopex Data UI", title: "Build data applications directly on AlopexDB", description: "One data model for forms, grids, charts, graphs, maps, and data exploration.", images: [{ url: image, width: 1734, height: 907, alt: "Alopex Data UI unified data model" }] },
    twitter: { card: "summary_large_image", title: "Alopex Data UI", description: "Data Application Components for AlopexDB", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
