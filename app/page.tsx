import type { Metadata } from "next";
import { LandingPage } from "./landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | Data Application Components for Any Data Source",
  description: "Connect databases, APIs, files, and streams to forms, grids, charts, graphs, maps, and data exploration applications through one DataSource contract.",
  alternates: { canonical: "/", languages: { en: "/", ja: "/ja/" } },
};

export default function Home() { return <LandingPage locale="en" />; }
