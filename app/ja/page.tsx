import type { Metadata } from "next";
import { LandingPage } from "../landing-page";

export const metadata: Metadata = {
  title: "Alopex Data UI | あらゆるデータソースをつなぐUI",
  description: "データベース、API、ファイル、ストリームを共通のDataSource契約でフォーム、グリッド、チャート、グラフ、地図へつなぐWeb UIコンポーネントSDK。",
  alternates: { canonical: "/ja/", languages: { en: "/", ja: "/ja/" } },
};

export default function JapaneseHome() { return <LandingPage locale="ja" />; }
