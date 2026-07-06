"use client";

import { FaAnchor, FaArrowRight, FaBriefcase, FaRocket } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

export function Services() {
  const { language } = useTranslation();

  const copy = {
    en: {
      title: "Experience",
      intro: "Recent roles across product engineering, SaaS architecture, mobile migration, and mission-critical operations.",
      roles: [
        {
          title: "Lead Product Engineer",
          company: "The Galindo Consulting Group, Inc.",
          period: "Jun 2026 - Present",
          summary:
            "Promoted to bridge engineering execution and GTM strategy for global SaaS startups, translating business goals into production-ready systems.",
          bullets: [
            "Own product roadmaps and product lifecycle decisions for high-stakes software",
            "Lead full-stack execution while reducing operational complexity and technical risk",
            "Design secure multi-tenant architectures aligned with long-term maintainability",
          ],
          icon: <FaBriefcase className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "Top Rated Plus SaaS Engineer",
          company: "Upwork",
          period: "Feb 2025 - Present",
          summary:
            "Long-term engineering partner for international startups building SaaS, AI systems, mobile apps, and production tooling.",
          bullets: [
            "Migrated a US marketplace from a prototype to React Native with geolocation and push constraints",
            "Optimized 50+ Supabase Edge Functions and moved geospatial logic into PostGIS",
            "Built AI-powered flows with OpenAI, RAG pipelines, vector search, and Stripe billing",
          ],
          icon: <FaRocket className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "IT Support Technician, Brazilian Navy",
          company: "Marinha do Brasil",
          period: "Sep 2021 - Sep 2024",
          summary:
            "Managed mission-critical infrastructure and support operations at Aratu Naval Base, building the discipline that now shapes my engineering work.",
          bullets: [
            "Maintained Windows, Linux, Samba, and network environments with operational continuity",
            "Applied security policies and access controls in a high-pressure environment",
            "Built a reliability-first mindset where deadlines, documentation, and ownership are non-negotiable",
          ],
          icon: <FaAnchor className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
      ],
    },
    pt: {
      title: "Experiencia",
      intro: "Atuacoes recentes em engenharia de produto, arquitetura SaaS, migracao mobile e operacoes mission-critical.",
      roles: [
        {
          title: "Lead Product Engineer",
          company: "The Galindo Consulting Group, Inc.",
          period: "Jun 2026 - Atual",
          summary:
            "Promovida para conectar execucao de engenharia e estrategia GTM em startups SaaS globais, traduzindo metas de negocio em sistemas prontos para producao.",
          bullets: [
            "Conduzo roadmaps e decisoes de ciclo de vida de produto em softwares de alta criticidade",
            "Lidero execucao full stack reduzindo complexidade operacional e risco tecnico",
            "Desenho arquiteturas multi-tenant seguras e sustentaveis no longo prazo",
          ],
          icon: <FaBriefcase className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "Top Rated Plus SaaS Engineer",
          company: "Upwork",
          period: "Fev 2025 - Atual",
          summary:
            "Parceira tecnica de longo prazo para startups internacionais construindo SaaS, sistemas com IA, apps mobile e tooling de producao.",
          bullets: [
            "Migrei um marketplace dos EUA de prototipo para React Native com restricoes reais de geolocalizacao e push",
            "Otimizei 50+ Supabase Edge Functions e movi logica geoespacial para PostGIS",
            "Implementei fluxos com OpenAI, pipelines RAG, busca vetorial e cobranca com Stripe",
          ],
          icon: <FaRocket className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "Tecnica de Suporte em TI, Marinha do Brasil",
          company: "Marinha do Brasil",
          period: "Set 2021 - Set 2024",
          summary:
            "Atuei na infraestrutura e no suporte de sistemas mission-critical na Base Naval de Aratu, construindo a disciplina que hoje guia meu trabalho em engenharia.",
          bullets: [
            "Mantive ambientes Windows, Linux, Samba e redes com continuidade operacional",
            "Apliquei politicas de seguranca e controle de acesso em ambiente de alta pressao",
            "Consolidei uma mentalidade de confiabilidade onde prazo, documentacao e ownership nao sao negociaveis",
          ],
          icon: <FaAnchor className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
      ],
    },
    es: {
      title: "Experiencia",
      intro: "Experiencia reciente en ingenieria de producto, arquitectura SaaS, migracion mobile y operaciones mission-critical.",
      roles: [
        {
          title: "Lead Product Engineer",
          company: "The Galindo Consulting Group, Inc.",
          period: "Jun 2026 - Actualidad",
          summary:
            "Promovida para conectar ejecucion de ingenieria y estrategia GTM en startups SaaS globales, traduciendo objetivos de negocio en sistemas listos para produccion.",
          bullets: [
            "Defino roadmaps y decisiones de ciclo de vida de producto en software de alta criticidad",
            "Lidero ejecucion full stack reduciendo complejidad operativa y riesgo tecnico",
            "Diseno arquitecturas multi-tenant seguras y mantenibles",
          ],
          icon: <FaBriefcase className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "Top Rated Plus SaaS Engineer",
          company: "Upwork",
          period: "Feb 2025 - Actualidad",
          summary:
            "Partner tecnico de largo plazo para startups internacionales construyendo SaaS, sistemas con IA, apps mobile y tooling de produccion.",
          bullets: [
            "Migre un marketplace de EE.UU. de prototipo a React Native con restricciones reales de geolocalizacion y push",
            "Optimice 50+ Supabase Edge Functions y movi logica geoespacial a PostGIS",
            "Implemente flujos con OpenAI, pipelines RAG, busqueda vectorial y Stripe",
          ],
          icon: <FaRocket className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "IT Support Technician, Marina de Brasil",
          company: "Marinha do Brasil",
          period: "Sep 2021 - Sep 2024",
          summary:
            "Gestione infraestructura y soporte mission-critical en la Base Naval de Aratu, formando la disciplina que hoy define mi trabajo de ingenieria.",
          bullets: [
            "Manteniendo entornos Windows, Linux, Samba y redes con continuidad operativa",
            "Aplicando politicas de seguridad y control de acceso bajo presion",
            "Consolidando una mentalidad donde plazo, documentacion y ownership no son negociables",
          ],
          icon: <FaAnchor className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
      ],
    },
  }[language];

  const services = copy.roles;

  return (
    <section
      id="services"
      className="py-12 mb-20 mt-20 text-center text-slate-800 dark:text-gray-100 scroll-smooth"
    >
      <h2 className="text-4xl md:text-5xl font-normal mb-12 md:mb-16 lg:mb-20 text-slate-800 dark:text-[#f0f4ff]">{copy.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#141720] dark:via-[#11131b] dark:to-[#141720] p-6 md:p-7 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-700"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/20 blur-xl"></div>
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="mb-4 md:mb-5 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="p-3 md:p-3.5 lg:p-4 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-2xl shadow-md group-hover:shadow-lg border border-white/10">
                  {service.icon}
                </div>
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200 text-center">
                {service.period}
              </p>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200 text-center">
                {service.company}
              </p>
              <h3 className="text-xl md:text-xl lg:text-2xl font-semibold mb-3 md:mb-3.5 lg:mb-4 text-slate-900 dark:text-[#f0f4ff] group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300 text-center">
                {service.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-gray-300 text-justify">
                {service.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <FaArrowRight className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}