import type { Metadata } from "next";
import { LandingPage } from "../landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | データの違いを画面へ持ち込まないUI基盤",
  description: "接続先の違いを境界へ収め、データ、クエリ、Panel、Dashboard、編集を一貫して扱うデータアプリケーション基盤。",
  alternates: { canonical: "/ja/", languages: { en: "/", ja: "/ja/" } },
};

export default function JapaneseHome() { return <LandingPage locale="ja" />; }
