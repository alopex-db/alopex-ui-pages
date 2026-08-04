import type { Metadata } from "next";
import { LandingPage } from "./landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | A Framework for Coherent Data Applications",
  description: "Unify data, queries, panels, dashboards, and editing in one application framework while backend details stay at the boundary.",
  alternates: { canonical: "/", languages: { en: "/", ja: "/ja/" } },
};

export default function Home() { return <LandingPage locale="en" />; }
