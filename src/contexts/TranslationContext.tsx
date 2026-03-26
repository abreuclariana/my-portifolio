"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";

declare function requestIdleCallback(callback: IdleRequestCallback): number;

type Language = "en" | "pt" | "es";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    let mounted = true;
    
    const loadTranslations = async () => {
      try {
        const translationsModule = await import(`../locales/${language}.json`);
        if (mounted) {
          setTranslations(translationsModule.default || translationsModule);
        }
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error("Error loading translations:", error);
        }
      }
    };
    
    requestIdleCallback(() => {
      loadTranslations();
    }) || setTimeout(loadTranslations, 0);
    
    return () => {
      mounted = false;
    };
  }, [language]);

  const t = useCallback((key: string): string => {
    const keys = key.split(".");
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return typeof value === "string" ? value : key;
  }, [translations]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}

