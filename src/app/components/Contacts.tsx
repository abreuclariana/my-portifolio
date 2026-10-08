"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

export function Contacts() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Contact",
      linkedin: "LinkedIn",
      email: "Email",
    },
    pt: {
      title: "Contato",
      linkedin: "LinkedIn",
      email: "Email",
    },
    es: {
      title: "Contacto",
      linkedin: "LinkedIn",
      email: "Email",
    },
  }[language];

  return (
    <section id="contact" className="py-10 md:py-12 mt-12 md:mt-16 lg:mt-20 text-center mb-8 md:mb-10 px-4 sm:px-6 md:px-8 scroll-smooth">
      <h2 className="text-4xl md:text-5xl font-normal mb-8 md:mb-10 lg:mb-12 text-slate-800 dark:text-[#f0f4ff]">
        {content.title}
      </h2>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="https://linkedin.com/in/clariana-abreu-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white/80 px-6 py-4 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200 sm:w-auto"
        >
          <FaLinkedin className="text-xl" />
          {content.linkedin}
        </a>

        <a
          href="mailto:abreuclariana@gmail.com"
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white/80 px-6 py-4 text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200 sm:w-auto"
        >
          <FaEnvelope className="text-xl" />
          {content.email}
        </a>
      </div>
    </section>
  );
}
