"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeChanger from "./DarkSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../../contexts/TranslationContext";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.services"), href: "#services" },
    { name: t("navbar.skills"), href: "#skills" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.contacts"), href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-slate-200/80 bg-white/78 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#07080c]/72"
      >
        <Link
          href="#top"
          className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 text-left transition-colors hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-cyan-300 dark:text-slate-950">
            CA
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
              Clariana Abreu
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              {t("navbar.brandSubtitle")}
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul
            role="menubar"
            className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 px-2 py-2 dark:border-white/10 dark:bg-white/5"
          >
            {navigation.map((menu) => (
              <li role="none" key={menu.href}>
                <a
                  href={menu.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-cyan-200"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex">
            <Link
              href="#contact"
              aria-label={t("navbar.goToTop")}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-600 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              {t("navbar.getStarted")}
            </Link>
          </div>

          <LanguageSwitcher />
          <ThemeChanger />

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200 lg:hidden"
            aria-label={t("navbar.openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl lg:hidden">
          <div
            id="mobile-menu"
            className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b0d12]/94"
          >
            <ul className="space-y-2">
              {navigation.map((menu) => (
                <li key={menu.href}>
                  <a
                    href={menu.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-200 dark:hover:border-cyan-300/20 dark:hover:bg-white/5 dark:hover:text-cyan-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-600 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              {t("navbar.getStarted")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};