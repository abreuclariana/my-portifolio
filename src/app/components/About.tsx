"use client";

import Image from 'next/image';
import { useTranslation } from "../../contexts/TranslationContext";

export function About() {
  const { language, t } = useTranslation();

  const content = {
    en: {
      title: "About",
      intro:
        "Adaptable, disciplined, and process-driven professional with a background in Navy operations, IT infrastructure, and international team collaboration.",
      paragraph:
        "My foundation was built during three years in the Brazilian Navy as an IT and Network Support Technician at the Aratu Naval Base, where I supported mission-critical infrastructure under strict operational protocols. Later, working with global teams in technology, I strengthened my ability to communicate across cultures, adapt quickly, and keep high standards under pressure.",
      pillars: [
        {
          title: "Operational discipline",
          items: [
            "Naval hierarchy and routine adherence",
            "Safety-minded execution under protocols",
            "Accountability in high-pressure environments",
          ],
        },
        {
          title: "IT and infrastructure",
          items: [
            "Network troubleshooting and systems support",
            "Infrastructure stability and access control",
            "Technology integration for operational teams",
          ],
        },
        {
          title: "Maritime readiness",
          items: [
            "Multicultural communication",
            "Hospitality and service standards",
            "Problem-solving focused on continuity",
          ],
        },
      ],
      quote:
        "Ready for international maritime environments, bringing military accountability, technical awareness, and operational excellence onboard.",
    },
    pt: {
      title: "Sobre",
      intro:
        "Profissional adaptavel, disciplinada e orientada a processos, com base em operacoes navais, infraestrutura de TI e colaboracao com times internacionais.",
      paragraph:
        "Minha base foi construida durante tres anos na Marinha do Brasil como Tecnica de Suporte em TI e Redes na Base Naval de Aratu, apoiando infraestrutura mission-critical sob protocolos operacionais rigorosos. Depois, trabalhando com times globais em tecnologia, fortalecei minha capacidade de comunicacao multicultural, adaptacao rapida e entrega sob pressao.",
      pillars: [
        {
          title: "Disciplina operacional",
          items: [
            "Hierarquia naval e aderencia a rotina",
            "Execucao com mentalidade de seguranca",
            "Responsabilidade em ambientes de pressao",
          ],
        },
        {
          title: "TI e infraestrutura",
          items: [
            "Troubleshooting de redes e suporte a sistemas",
            "Estabilidade de infraestrutura e controle de acesso",
            "Integracao de tecnologia para times operacionais",
          ],
        },
        {
          title: "Prontidao maritima",
          items: [
            "Comunicacao multicultural",
            "Padroes de hospitalidade e servico",
            "Resolucao de problemas com foco em continuidade",
          ],
        },
      ],
      quote:
        "Pronta para ambientes maritimos internacionais, levando responsabilidade militar, consciencia tecnica e excelencia operacional a bordo.",
    },
    es: {
      title: "Sobre mi",
      intro:
        "Profesional adaptable, disciplinada y orientada a procesos, con base en operaciones navales, infraestructura de TI y colaboracion con equipos internacionales.",
      paragraph:
        "Mi base fue construida durante tres anos en la Marina de Brasil como Tecnica de Soporte en TI y Redes en la Base Naval de Aratu, apoyando infraestructura mission-critical bajo protocolos operativos estrictos. Despues, trabajando con equipos globales en tecnologia, fortaleci mi comunicacion multicultural, adaptacion rapida y entrega bajo presion.",
      pillars: [
        {
          title: "Disciplina operativa",
          items: [
            "Jerarquia naval y adherencia a rutinas",
            "Ejecucion con mentalidad de seguridad",
            "Responsabilidad en entornos bajo presion",
          ],
        },
        {
          title: "TI e infraestructura",
          items: [
            "Troubleshooting de redes y soporte de sistemas",
            "Estabilidad de infraestructura y control de acceso",
            "Integracion tecnologica para equipos operativos",
          ],
        },
        {
          title: "Preparacion maritima",
          items: [
            "Comunicacion multicultural",
            "Estandares de hospitalidad y servicio",
            "Resolucion de problemas con foco en continuidad",
          ],
        },
      ],
      quote:
        "Lista para entornos maritimos internacionales, llevando responsabilidad militar, conciencia tecnica y excelencia operativa a bordo.",
    },
  }[language];
  
  return (
    <section id="about" className="mt-10 py-14 text-center scroll-smooth">
      <h2 className="text-4xl md:text-5xl font-normal mb-12 md:mb-16 lg:mb-20 text-slate-800 dark:text-[#f0f4ff]">
        {content.title}
      </h2>

      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 gap-8 md:gap-10 lg:gap-12">
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-5xl min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#141720] p-2 sm:p-3 md:p-4">
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

        <div className="w-full max-w-4xl lg:max-w-5xl text-left flex flex-col justify-center px-2 sm:px-4 md:px-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide text-slate-700 dark:text-gray-300 mb-4 md:mb-6">
            {content.intro}
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide text-slate-700 dark:text-gray-300 mb-4 md:mb-6">
            {content.paragraph}
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide text-slate-700 dark:text-gray-300">
            {content.quote}
          </p>
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {content.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-slate-200 bg-white/80 p-5 text-left shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
                {pillar.title}
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
