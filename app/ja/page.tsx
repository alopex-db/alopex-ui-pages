import type { Metadata } from "next";
import { LandingPage } from "../landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | AlopexDB・DuckDB対応データアプリケーションUI",
  description: "AlopexDBとDuckDBを共通のデータモデルでフォーム、グリッド、チャート、グラフ、地図へつなぐWeb UIコンポーネントSDK。",
  alternates: { canonical: "/ja/", languages: { en: "/", ja: "/ja/" } },
};

export default function JapaneseHome() { return <LandingPage locale="ja" />; }
