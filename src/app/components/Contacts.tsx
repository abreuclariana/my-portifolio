"use client";

import { FaGithub, FaLinkedin, FaBriefcase, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

export function Contacts() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Let's Build Something Reliable",
      description:
        "Open to full-time leadership roles, product engineering engagements, and consulting for SaaS teams that need stability, security, and clearer architecture.",
      availability: [
        "Lead Product Engineering",
        "SaaS architecture consulting",
        "Remote, hybrid, and on-site opportunities",
      ],
      location: "Salvador, Bahia, Brazil",
      linksTitle: "LinkedIn, GitHub, Upwork and email.",
      linksLabel: "Direct links",
    },
    pt: {
      title: "Disponibilidade",
      description:
        "Buscando emprego e aberta para oportunidades em lideranca tecnica, product engineering e consultoria para produtos SaaS que exigem estabilidade, seguranca e arquitetura bem definida.",
      availability: [
        "Lead Full-Stack / Product Engineer",
        "Presencial, hibrido e remoto",
        "Salvador, BA e regioes globais",
      ],
      location: "Salvador, Bahia, Brasil",
      linksTitle: "LinkedIn, GitHub, Upwork e email.",
      linksLabel: "Links diretos",
    },
    es: {
      title: "Construyamos Algo Confiable",
      description:
        "Disponible para liderazgo full-time, product engineering y consultoria para equipos SaaS que necesitan estabilidad, seguridad y una arquitectura mas clara.",
      availability: [
        "Liderazgo en Product Engineering",
        "Consultoria en arquitectura SaaS",
        "Oportunidades remotas, hibridas y presenciales",
      ],
      location: "Salvador, Bahia, Brasil",
      linksTitle: "LinkedIn, GitHub, Upwork y email.",
      linksLabel: "Links directos",
    },
  }[language];
  
  return (
    <section id="contact" className="py-10 md:py-12 mt-12 md:mt-16 lg:mt-20 text-center mb-8 md:mb-10 px-4 sm:px-6 md:px-8 scroll-smooth">
      <h2 className="text-4xl md:text-5xl font-normal mb-8 md:mb-10 lg:mb-12 text-slate-800 dark:text-[#f0f4ff]">{content.title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-20 md:gap-32 lg:gap-40 max-w-6xl mx-auto items-center">
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#141720] dark:via-[#11131b] dark:to-[#141720] p-8 md:p-10 shadow-2xl">
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-gray-300 max-w-2xl mb-8 px-2 md:px-0">
            {content.description}
          </p>
          <div className="grid gap-3 sm:grid-cols-3 mb-8">
            {content.availability.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 md:gap-7 lg:gap-8 mt-4 md:mt-5 lg:mt-6">
            <a
              href="https://github.com/abreuclariana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all text-3xl md:text-3xl lg:text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/clariana-abreu-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all text-3xl md:text-3xl lg:text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01d2dbae59f1642147?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all text-3xl md:text-3xl lg:text-4xl"
            >
              <FaBriefcase />
            </a>
          </div>
          <div className="mt-8 space-y-3 text-sm md:text-base text-slate-600 dark:text-gray-300">
            <p className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-cyan-600 dark:text-cyan-300" />
              {content.location}
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhone className="text-cyan-600 dark:text-cyan-300" />
              +55 (71) 99195-0348
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-cyan-600 dark:text-cyan-300" />
              <a href="mailto:abreuclariana@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                abreuclariana@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
