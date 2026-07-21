import type { Metadata } from "next";
import { LandingPage } from "./landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | A Consistent Model for Data Applications",
  description: "Build forms, grids, charts, graphs, maps, and data exploration applications on one consistent interface model while backend details stay at the boundary.",
  alternates: { canonical: "/", languages: { en: "/", ja: "/ja/" } },
};

export default function Home() { return <LandingPage locale="en" />; }
