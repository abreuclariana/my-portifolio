"use client";

import { FaUserTie, FaLaptopCode, FaNetworkWired } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

export function Services() {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t("services.technicalSupport.title"),
      description: t("services.technicalSupport.description"),
      icon: <FaUserTie className="text-indigo-600 text-4xl" />,
    },
    {
      title: t("services.websiteCreation.title"),
      description: t("services.websiteCreation.description"),
      icon: <FaLaptopCode className="text-indigo-600 text-4xl" />,
    },
    {
      title: t("services.exclusiveCustomizations.title"),
      description: t("services.exclusiveCustomizations.description"),
      icon: <FaNetworkWired className="text-indigo-600 text-4xl" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-12 mb-20 mt-20 text-center text-slate-800 dark:text-gray-100 scroll-smooth"
    >
      <h2 className="text-4xl md:text-5xl font-normal mb-12 md:mb-16 lg:mb-20 text-slate-800 dark:text-[#f0f4ff]">{t("services.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#141720] dark:via-[#11131b] dark:to-[#141720] p-6 md:p-7 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
          >
            {/* Gradiente de fundo animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-700"></div>
            
            {/* Brilho sutil no hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/20 blur-xl"></div>
            </div>
            
            {/* Borda brilhante no hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-500"></div>

            {/* Conteúdo */}
            <div className="relative z-10">
              {/* Ícone */}
              <div className="mb-4 md:mb-5 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="p-3 md:p-3.5 lg:p-4 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-2xl shadow-md group-hover:shadow-lg border border-white/10">
                  <div className="text-cyan-300 text-3xl md:text-3xl lg:text-4xl">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Título */}
              <h3 className="text-xl md:text-xl lg:text-2xl font-semibold mb-3 md:mb-3.5 lg:mb-4 text-slate-900 dark:text-[#f0f4ff] group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300 text-center">
                {service.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-gray-300 text-justify">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}