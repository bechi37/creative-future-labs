"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type Lang } from "./i18n";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LangCtx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("cfl-lang") as Lang | null;
    if (saved === "en" || saved === "bg") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("cfl-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
