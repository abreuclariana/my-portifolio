"use client";

import Image from 'next/image';
import { useTranslation } from "../../contexts/TranslationContext";

export function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="mt-10 py-10 text-center scroll-smooth">
      {/* Título centralizado */}
      <h2 className="text-5xl font-bold mb-20 text-gray-600 dark:text-gray-100">
        {t("about.title")}
      </h2>

      {/* Container flexível para layout vertical */}
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 gap-8 md:gap-10 lg:gap-12">
        
        {/* Imagem - Sempre acima */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-5xl min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border-2 md:border-3 lg:border-4 border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800 p-2 sm:p-3 md:p-4">
            <Image
              src="/img/background.jpg"
              alt={t("about.photoAlt")}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 1200px, (max-width: 1536px) 1400px, 1600px"
            />
          </div>
        </div>

        {/* Texto - Sempre abaixo */}
        <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-6xl text-justify flex flex-col justify-center px-2 sm:px-4 md:px-6">
         <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide dark:text-gray-100 text-gray-600 mb-4 md:mb-6">
          {t("about.paragraph1")}
         </p>

         <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide dark:text-gray-100 text-gray-600">
          {t("about.paragraph2")}
        </p>

        </div>
      </div>
    </section>
  );
}
