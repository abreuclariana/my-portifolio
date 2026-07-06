"use client";

import Image from 'next/image';
import { useTranslation } from '../../../contexts/TranslationContext';

export const Header = () => {
  const { language, t } = useTranslation();

  const content = {
    en: {
      eyebrow: "Lead Full-Stack Engineer for SaaS Startups",
      title: "Clariana Abreu",
      subtitle:
        "Product-minded engineering across TypeScript, Next.js, AI, secure backend systems, and scalable SaaS architecture.",
      stats: [
        { value: "50+", label: "Supabase Edge Functions maintained in production" },
        { value: "220+", label: "Hours delivered in a mobile migration engagement" },
      ],
      primaryCta: "Visit Upwork",
      secondaryCta: "View LinkedIn",
      githubCta: "View on GitHub",
      focusLabel: "Focus",
      focusValue: "TypeScript, Next.js, React Native, Supabase, OpenAI",
      approachLabel: "Approach",
      approachValue: "Reliable systems under real users, not demo-only software.",
    },
    pt: {
      eyebrow: "Lead Full-Stack Engineer para startups SaaS",
      title: "Clariana Abreu",
      subtitle:
        "Engenharia com visao de produto em TypeScript, Next.js, IA, backend seguro e arquitetura SaaS escalavel.",
      stats: [
        { value: "50+", label: "Supabase Edge Functions mantidas em producao" },
        { value: "220+", label: "Horas entregues em um projeto de migracao mobile" },
      ],
      primaryCta: "Ver Upwork",
      secondaryCta: "Ver LinkedIn",
      githubCta: "Ver GitHub",
      focusLabel: "Foco",
      focusValue: "TypeScript, Next.js, React Native, Supabase, OpenAI",
      approachLabel: "Abordagem",
      approachValue: "Sistemas confiaveis sob uso real, nao software apenas de demonstracao.",
    },
    es: {
      eyebrow: "Lead Full-Stack Engineer para startups SaaS",
      title: "Clariana Abreu",
      subtitle:
        "Ingenieria con enfoque de producto en TypeScript, Next.js, IA, backend seguro y arquitectura SaaS escalable.",
      stats: [
        { value: "50+", label: "Supabase Edge Functions mantenidas en produccion" },
        { value: "220+", label: "Horas entregadas en una migracion mobile" },
      ],
      primaryCta: "Ver Upwork",
      secondaryCta: "Ver LinkedIn",
      githubCta: "Ver GitHub",
      focusLabel: "Foco",
      focusValue: "TypeScript, Next.js, React Native, Supabase, OpenAI",
      approachLabel: "Enfoque",
      approachValue: "Sistemas confiables bajo usuarios reales, no software solo de demo.",
    },
  }[language];
  return (
    <main id="top" className="container mx-auto flex flex-col items-center justify-center px-4 sm:px-5 md:px-6">
      <header className="flex flex-col-reverse md:flex-row items-center justify-between w-full py-12 md:py-16 lg:py-24 min-h-screen-navbar gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-4 md:gap-6 md:ml-8 lg:ml-24">
          <p className="text-[10px] sm:text-xs tracking-[0.22em] uppercase font-bold text-cyan-600 dark:text-cyan-300">
            {content.eyebrow}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-slate-800 dark:text-[#f0f4ff] drop-shadow-sm text-center md:text-left">
            {content.title}
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-gray-300 font-medium text-center md:text-left max-w-xl">
            {content.subtitle}
          </h2>

          <div className="grid w-full max-w-2xl grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/5 md:text-left"
              >
                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{stat.value}</p>
                <p className="mt-1 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 w-full sm:w-auto">
            <a
              href="https://www.upwork.com/freelancers/~01d2dbae59f1642147?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white dark:text-[#07080c] bg-cyan-600 dark:bg-cyan-300 rounded-full hover:bg-cyan-700 dark:hover:bg-cyan-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              {content.primaryCta}
            </a>

            <a
              href="https://www.linkedin.com/in/clariana-abreu-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-slate-700 dark:text-slate-100 border border-slate-300 dark:border-white/10 rounded-full hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 text-center"
            >
              {content.secondaryCta}
            </a>

            <a
              href="https://github.com/abreuclariana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <title>GitHub</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12c0-6.627-5.373-12-12-12Z"
                />
              </svg>
              <span className="font-medium">{content.githubCta}</span>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative transform hover:scale-105 transition-transform duration-500 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.14)] border-4 border-white dark:border-white/15">
              <Image
                src="/img/linkedin.webp"
                width={400}
                height={400}
                alt={t("header.profileAlt")}
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
                priority
                className="w-full h-full object-cover rounded-full"
              />
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;