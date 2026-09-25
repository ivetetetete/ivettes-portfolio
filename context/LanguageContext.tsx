"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Locale, Translations } from "@/types/i18n";
import { translations } from "@/locales";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-locale-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-locale-change", callback);
  };
}

function getSnapshot(): Locale {
  const saved = localStorage.getItem("portfolio_locale") as Locale | null;
  if (saved && ["es", "ca", "en"].includes(saved)) {
    return saved;
  }
  const browserLang = typeof navigator !== "undefined" ? navigator.language?.toLowerCase() || "" : "";
  if (browserLang.startsWith("ca")) {
    return "ca";
  }
  if (browserLang.startsWith("es")) {
    return "es";
  }
  return "en";
}

function getServerSnapshot(): Locale {
  return "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem("portfolio_locale", newLocale);
      document.documentElement.lang = newLocale;
      window.dispatchEvent(new Event("portfolio-locale-change"));
    } catch {
      // Ignore private mode errors
    }
  };

  const t = translations[locale] || translations.es;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
