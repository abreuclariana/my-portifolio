"use client";

import Image from 'next/image';
import { useTranslation } from "../../contexts/TranslationContext";

export function About() {
  const { language, t } = useTranslation();

  const content = {
    en: {
      title: "About",
      intro:
        "If you are building a SaaS product that is breaking under real users, struggling with scalability, or becoming too complex to evolve safely, I help fix that.",
      paragraph:
        "I work as a Product Engineer focused on designing and stabilizing SaaS systems that need to operate reliably in production, not just work in demos. Architecture, security, and performance are part of the same foundation.",
      pillars: [
        {
          title: "What I design",
          items: [
            "Multi-tenant SaaS backend architecture",
            "Secure PostgreSQL data models with Row Level Security",
            "Production APIs, webhooks, and event-driven workflows",
            "AI-powered systems with RAG, OpenAI, and pgvector",
          ],
        },
        {
          title: "What I improve",
          items: [
            "Reduce system complexity without losing flexibility",
            "Stabilize fragile workflows under real traffic",
            "Improve maintainability across growing codebases",
            "Align technical decisions with product outcomes",
          ],
        },
        {
          title: "Operating mindset",
          items: [
            "Reliability under pressure",
            "Predictable and controllable failures",
            "Discipline over unnecessary complexity",
            "Ownership that does not stop at deployment",
          ],
        },
      ],
      quote:
        "I treat software as operational infrastructure, not just code.",
    },
    pt: {
      title: "Sobre",
      intro:
        "Se voce esta construindo um produto SaaS que quebra com usuarios reais, sofre com escalabilidade ou esta ficando complexo demais para evoluir com seguranca, eu ajudo a resolver isso.",
      paragraph:
        "Atuo como Product Engineer focada em desenhar e estabilizar sistemas SaaS que precisam operar com confiabilidade em producao, e nao apenas funcionar em demos. Arquitetura, seguranca e performance fazem parte da mesma base.",
      pillars: [
        {
          title: "O que eu desenho",
          items: [
            "Arquitetura backend SaaS multi-tenant",
            "Modelos de dados seguros com PostgreSQL e Row Level Security",
            "APIs de producao, webhooks e fluxos orientados a eventos",
            "Sistemas com IA usando RAG, OpenAI e pgvector",
          ],
        },
        {
          title: "O que eu melhoro",
          items: [
            "Reduzo complexidade sem perder flexibilidade",
            "Estabilizo fluxos criticos sob trafego real",
            "Melhoro manutencao em codebases em crescimento",
            "Alinho decisoes tecnicas com resultado de produto",
          ],
        },
        {
          title: "Mentalidade de operacao",
          items: [
            "Confiabilidade sob pressao",
            "Falhas previsiveis e controlaveis",
            "Disciplina acima de complexidade desnecessaria",
            "Ownership que nao termina no deploy",
          ],
        },
      ],
      quote:
        "Eu trato software como infraestrutura operacional, nao apenas como codigo.",
    },
    es: {
      title: "Sobre mi",
      intro:
        "Si estas construyendo un producto SaaS que falla con usuarios reales, tiene problemas de escalabilidad o se vuelve demasiado complejo para evolucionar con seguridad, yo ayudo a resolverlo.",
      paragraph:
        "Trabajo como Product Engineer enfocada en disenar y estabilizar sistemas SaaS que deben operar con fiabilidad en produccion, no solo en demos. Arquitectura, seguridad y rendimiento forman la misma base.",
      pillars: [
        {
          title: "Lo que diseno",
          items: [
            "Arquitectura backend SaaS multi-tenant",
            "Modelos de datos seguros con PostgreSQL y Row Level Security",
            "APIs de produccion, webhooks y flujos orientados a eventos",
            "Sistemas con IA usando RAG, OpenAI y pgvector",
          ],
        },
        {
          title: "Lo que mejoro",
          items: [
            "Reduzco complejidad sin perder flexibilidad",
            "Estabilizo flujos criticos bajo trafico real",
            "Mejoro mantenibilidad en codebases en crecimiento",
            "Alineo decisiones tecnicas con resultados de producto",
          ],
        },
        {
          title: "Mentalidad operativa",
          items: [
            "Confiabilidad bajo presion",
            "Fallos previsibles y controlables",
            "Disciplina sobre complejidad innecesaria",
            "Ownership que no termina en el deploy",
          ],
        },
      ],
      quote:
        "Trato el software como infraestructura operativa, no solo como codigo.",
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

        <div className="w-full max-w-4xl lg:max-w-5xl text-justify flex flex-col justify-center px-2 sm:px-4 md:px-6">
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
      </div>
    </section>
  );
}
