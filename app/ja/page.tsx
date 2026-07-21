import type { Metadata } from "next";
import { LandingPage } from "../landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | データの違いを画面へ持ち込まないUI基盤",
  description: "バックエンド固有の処理を境界へ収め、フォーム、グリッド、チャート、グラフ、地図を一貫したモデルで構築するWeb UIコンポーネントSDK。",
  alternates: { canonical: "/ja/", languages: { en: "/", ja: "/ja/" } },
};

export default function JapaneseHome() { return <LandingPage locale="ja" />; }
