import type { Metadata } from "next";
import { LandingPage } from "../landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | AlopexDB向けデータアプリケーションUI",
  description: "AlopexDBのデータをフォーム、グリッド、チャート、グラフ、地図へ接続するWeb UIコンポーネントSDK。",
  alternates: { canonical: "/ja/", languages: { en: "/", ja: "/ja/" } },
};

export default function JapaneseHome() { return <LandingPage locale="ja" />; }
