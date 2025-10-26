"use client";

import { useState } from "react";
import { useTranslation } from "../../contexts/TranslationContext";

const languages = [
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "pt" as const, name: "Português", flag: "🇧🇷" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const selectedLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (code: string) => {
    setLanguage(code as "en" | "pt" | "es");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="text-sm font-medium">{selectedLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded-md shadow-lg z-20 border border-gray-200 dark:border-gray-700">
            <ul className="py-1">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors ${
                      language === lang.code
                        ? "bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {language === lang.code && (
                      <svg
                        className="w-4 h-4 ml-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

