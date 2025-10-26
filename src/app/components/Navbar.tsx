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
        className="container relative flex flex-wrap items-center justify-between p-10 mx-auto lg:justify-between xl:px-1"
      >
        {/* Botão do menu mobile */}
        <div className="lg:hidden flex items-center">
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

        {/* Navegação principal - desktop */}
        <div className="hidden text-center lg:flex lg:items-center lg:ml-28">
          <ul
            role="menubar"
            className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex"
          >
            {navigation.map((menu, index) => (
              <li role="menuitem" className="mr-3 nav__item" key={index}>
                <a
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ações: Get Started + ThemeChanger */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2 flex items-center lg:mr-24">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/"
              aria-label={t("navbar.goToTop")}
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
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