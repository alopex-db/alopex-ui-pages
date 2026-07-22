import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "../app/landing-page";
import "../app/globals.css";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const locale = window.location.pathname.endsWith("/ja/") ? "ja" : "en";

document.documentElement.lang = locale;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage locale={locale} basePath={basePath} />
  </StrictMode>,
);
