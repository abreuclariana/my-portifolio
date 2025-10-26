"use client";

import Image from 'next/image';
import { useTranslation } from "../../contexts/TranslationContext";

export function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="mt-30 py-10 text-center scroll-smooth">
      {/* Título centralizado */}
      <h2 className="text-5xl font-bold mb-20 text-gray-600 dark:text-gray-100">
        {t("about.title")}
      </h2>

      {/* Container flexível para layout em colunas */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-32 gap-20">
        
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/img/background.jpg"
            alt={t("about.photoAlt")}
            width={700}
            height={600}
            className="w-96 h-96 md:w-[700px] md:h-[600px] rounded-lg object-cover shadow-2xl border border-gray-300 dark:border-gray-600"
            priority
          />
        </div>

        {/* Coluna do Texto */}
        <div className="w-full md:w-1/2 text-justify">
         <p className="text-2xl leading-relaxed tracking-wide dark:text-gray-100 text-gray-600 mb-4">
          {t("about.paragraph1")}
         </p>

         <p className="text-2xl leading-relaxed tracking-wide dark:text-gray-100 text-gray-600 mb-4">
          {t("about.paragraph2")}
        </p>

        </div>
      </div>
    </section>
  );
}
