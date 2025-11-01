"use client";

import { FaDesktop, FaCode, FaCogs } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

export function Services() {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t("services.technicalSupport.title"),
      description: t("services.technicalSupport.description"),
      icon: <FaCogs className="text-indigo-600 text-4xl" />,
    },
    {
      title: t("services.websiteCreation.title"),
      description: t("services.websiteCreation.description"),
      icon: <FaCode className="text-indigo-600 text-4xl" />,
    },
    {
      title: t("services.exclusiveCustomizations.title"),
      description: t("services.exclusiveCustomizations.description"),
      icon: <FaDesktop className="text-indigo-600 text-4xl" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-10 mb-20  mt-20 text-center bg-white text-gray-600 dark:bg-zinc-900 dark:text-white scroll-smooth"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 lg:mb-20">{t("services.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-br from-white via-gray-50 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-6 md:p-7 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-zinc-700/80 overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
          >
            {/* Gradiente de fundo animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/15 group-hover:to-pink-500/10 transition-all duration-700"></div>
            
            {/* Brilho sutil no hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-transparent to-purple-400/20 blur-xl"></div>
            </div>
            
            {/* Borda brilhante no hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-400/60 dark:group-hover:border-indigo-500/60 transition-all duration-500"></div>

            {/* Conteúdo */}
            <div className="relative z-10">
              {/* Ícone */}
              <div className="mb-4 md:mb-5 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="p-3 md:p-3.5 lg:p-4 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-2xl shadow-md group-hover:shadow-lg">
                  <div className="text-indigo-600 dark:text-indigo-400 text-3xl md:text-3xl lg:text-4xl">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Título */}
              <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-3 md:mb-3.5 lg:mb-4 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 text-center">
                {service.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}