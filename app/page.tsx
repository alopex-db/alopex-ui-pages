import type { Metadata } from "next";
import { LandingPage } from "./landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | Data Application Components for AlopexDB",
  description: "A Web UI component SDK for building forms, grids, charts, graphs, maps, and data exploration applications on AlopexDB.",
  alternates: { canonical: "/", languages: { en: "/", ja: "/ja/" } },
};

export default function Home() { return <LandingPage locale="en" />; }
