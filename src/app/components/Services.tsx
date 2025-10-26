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
      <h2 className="text-5xl font-bold mb-20">{t("services.title")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-10 rounded-lg shadow-lg hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all transform hover:scale-105"
          >
            <div className="mb-6 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-5">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}