"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../../contexts/TranslationContext";

export const Navbar = () => {
  const { t } = useTranslation();
  
  const navigation = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.services"), href: "#services" },
    { name: t("navbar.skills"), href: "#skills" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.contacts"), href: "#contact" },
  ];

  return (
    <div className="w-full">
      <nav
        aria-label="Main Navigation"
        className="container relative flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 mx-auto lg:justify-between"
      >
        {/* Botão do menu mobile */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-500 hover:text-indigo-500 focus:outline-none"
            aria-label="Abrir menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              />
            </svg>
          </button>
        </div>

        {/* Navegação principal - tablet e desktop */}
        <div className="hidden md:flex md:items-center md:ml-4 lg:ml-8 xl:ml-16 2xl:ml-28">
          <ul
            role="menubar"
            className="items-center justify-end flex-1 pt-6 list-none md:pt-0 md:flex"
          >
            {navigation.map((menu, index) => (
              <li role="menuitem" className="mr-1 md:mr-1.5 lg:mr-2 xl:mr-3 nav__item" key={index}>
                <a
                  href={menu.href}
                  className="inline-block px-1.5 md:px-2 lg:px-3 xl:px-4 py-2 text-xs md:text-sm lg:text-base xl:text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ações: Get Started + LanguageSwitcher + ThemeChanger */}
        <div className="gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 nav__item mr-0 md:mr-4 lg:mr-8 xl:mr-16 2xl:mr-24 ml-auto md:ml-0 md:order-2 flex items-center flex-shrink-0">
          <div className="hidden md:flex nav__item mr-1 md:mr-1.5 lg:mr-2 2xl:mr-3">
            <Link
              href="/"
              aria-label={t("navbar.goToTop")}
              className="px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6 py-2 text-xs md:text-xs lg:text-sm xl:text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              {t("navbar.getStarted")}
            </Link>
          </div>

          {/* Componente de alternância de idioma */}
          <LanguageSwitcher />

          {/* Componente de alternância de tema */}
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};