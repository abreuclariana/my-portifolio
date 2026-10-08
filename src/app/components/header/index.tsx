"use client";

import Image from 'next/image';
import { useTranslation } from '../../../contexts/TranslationContext';

export const Header = () => {
  const { language, t } = useTranslation();

  const content = {
    en: {
      eyebrow: "Maritime Operations & Tech Specialist | Brazilian Navy Veteran",
      title: "Clariana Abreu",
      subtitle:
        "Operationally disciplined professional with a Navy IT background, international team experience, and a strong foundation in systems infrastructure.",
      stats: [
        { value: "3 years", label: "Brazilian Navy IT and network operations" },
        { value: "4", label: "Languages across multicultural environments" },
        { value: "Global", label: "Remote collaboration with international teams" },
      ],
      primaryCta: "View LinkedIn",
      secondaryCta: "Email",
      focusLabel: "Focus",
      focusValue: "Maritime operations, hospitality standards, IT infrastructure, systems support",
      approachLabel: "Operating standard",
      approachValue: "Discipline, adaptability, multicultural communication, and reliable execution.",
    },
    pt: {
      eyebrow: "Maritime Operations & Tech Specialist | Veterana da Marinha do Brasil",
      title: "Clariana Abreu",
      subtitle:
        "Profissional disciplinada, com base em TI na Marinha, experiencia com times internacionais e forte fundamento em infraestrutura de sistemas.",
      stats: [
        { value: "3 anos", label: "Operacoes de TI e redes na Marinha do Brasil" },
        { value: "4", label: "Idiomas em ambientes multiculturais" },
        { value: "Global", label: "Colaboracao remota com times internacionais" },
      ],
      primaryCta: "Ver LinkedIn",
      secondaryCta: "Email",
      focusLabel: "Foco",
      focusValue: "Operacoes maritimas, padroes de hospitalidade, infraestrutura de TI, suporte a sistemas",
      approachLabel: "Padrao de operacao",
      approachValue: "Disciplina, adaptabilidade, comunicacao multicultural e execucao confiavel.",
    },
    es: {
      eyebrow: "Maritime Operations & Tech Specialist | Veterana de la Marina de Brasil",
      title: "Clariana Abreu",
      subtitle:
        "Profesional disciplinada, con base en TI naval, experiencia con equipos internacionales y fuerte fundamento en infraestructura de sistemas.",
      stats: [
        { value: "3 años", label: "Operaciones de TI y redes en la Marina de Brasil" },
        { value: "4", label: "Idiomas en entornos multiculturales" },
        { value: "Global", label: "Colaboracion remota con equipos internacionales" },
      ],
      primaryCta: "Ver LinkedIn",
      secondaryCta: "Email",
      focusLabel: "Foco",
      focusValue: "Operaciones maritimas, estandares de hospitalidad, infraestructura de TI, soporte de sistemas",
      approachLabel: "Estandar operativo",
      approachValue: "Disciplina, adaptabilidad, comunicacion multicultural y ejecucion confiable.",
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
                className="rounded-lg border border-slate-200 bg-white/80 p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/5 md:text-left"
              >
                <p className="text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid w-full max-w-2xl grid-cols-1 gap-3 rounded-lg border border-cyan-500/20 bg-cyan-500/[0.08] p-4 text-left dark:bg-cyan-300/[0.08]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
              {content.focusLabel}
            </p>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {content.focusValue}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
              {content.approachLabel}
            </p>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {content.approachValue}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 w-full sm:w-auto">
            <a
              href="https://www.linkedin.com/in/clariana-abreu-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white dark:text-[#07080c] bg-cyan-600 dark:bg-cyan-300 rounded-full hover:bg-cyan-700 dark:hover:bg-cyan-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              {content.primaryCta}
            </a>

            <a
              href="mailto:abreuclariana@gmail.com"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-slate-700 dark:text-slate-100 border border-slate-300 dark:border-white/10 rounded-full hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 text-center"
            >
              {content.secondaryCta}
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
