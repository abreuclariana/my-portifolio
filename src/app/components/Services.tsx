"use client";

import { FaAnchor, FaArrowRight, FaBriefcase, FaRocket } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

export function Services() {
  const { language } = useTranslation();

  const copy = {
    en: {
      title: "Experience",
      intro: "Operational experience across naval IT infrastructure, international technology teams, systems stability, and multicultural communication.",
      roles: [
        {
          title: "IT Support Technician, Brazilian Navy",
          company: "Marinha do Brasil",
          period: "Sep 2021 - Sep 2024",
          summary:
            "Served at Aratu Naval Base supporting mission-critical IT infrastructure, network environments, access routines, and operational continuity under strict naval protocols.",
          bullets: [
            "Maintained Windows, Linux, Samba, and network environments for military operations",
            "Supported security policies, access controls, and infrastructure stability",
            "Built a discipline-first mindset shaped by naval hierarchy, routine, and accountability",
          ],
          icon: <FaAnchor className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "International Technology Specialist",
          company: "Upwork",
          period: "Feb 2025 - Present",
          summary:
            "Worked with international teams across software, mobile, AI, and production systems, strengthening communication, problem-solving, and delivery standards across cultures.",
          bullets: [
            "Collaborated with founders and teams across different countries, time zones, and business contexts",
            "Handled systems stability, troubleshooting, and operational workflows under real production pressure",
            "Maintained a Top Rated Plus profile with 100% Job Success through consistency and ownership",
          ],
          icon: <FaRocket className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "Lead Product Engineer, International Teams",
          company: "The Galindo Consulting Group, Inc.",
          period: "Apr 2026 - Sep 2026",
          summary:
            "Led technical execution for global teams, translating business priorities into organized workflows, reliable systems, and clear communication across stakeholders.",
          bullets: [
            "Coordinated priorities between technical and non-technical stakeholders",
            "Reduced operational complexity through documentation, process, and systems organization",
            "Worked in remote, multicultural environments with high standards for delivery and accountability",
          ],
          icon: <FaBriefcase className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
      ],
    },
    pt: {
      title: "Experiencia",
      intro: "Experiencia operacional em infraestrutura de TI naval, times internacionais de tecnologia, estabilidade de sistemas e comunicacao multicultural.",
      roles: [
        {
          title: "Tecnica de Suporte em TI, Marinha do Brasil",
          company: "Marinha do Brasil",
          period: "Set 2021 - Set 2024",
          summary:
            "Servi na Base Naval de Aratu apoiando infraestrutura de TI mission-critical, ambientes de rede, rotinas de acesso e continuidade operacional sob protocolos navais rigorosos.",
          bullets: [
            "Mantive ambientes Windows, Linux, Samba e redes para operacoes militares",
            "Apoiei politicas de seguranca, controle de acesso e estabilidade de infraestrutura",
            "Construí uma mentalidade disciplinada pela hierarquia naval, rotina e responsabilidade",
          ],
          icon: <FaAnchor className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "International Technology Specialist",
          company: "Upwork",
          period: "Fev 2025 - Atual",
          summary:
            "Trabalhei com times internacionais em software, mobile, IA e sistemas em producao, fortalecendo comunicacao, resolucao de problemas e padroes de entrega entre culturas.",
          bullets: [
            "Colaborei com founders e times de diferentes paises, fusos horarios e contextos de negocio",
            "Atuei em estabilidade de sistemas, troubleshooting e fluxos operacionais sob pressao real",
            "Mantive perfil Top Rated Plus com 100% Job Success por consistencia e ownership",
          ],
          icon: <FaRocket className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "Lead Product Engineer, Times Internacionais",
          company: "The Galindo Consulting Group, Inc.",
          period: "Abr 2026 - Set 2026",
          summary:
            "Liderei execucao tecnica para times globais, traduzindo prioridades de negocio em fluxos organizados, sistemas confiaveis e comunicacao clara entre stakeholders.",
          bullets: [
            "Coordenei prioridades entre stakeholders tecnicos e nao tecnicos",
            "Reduzi complexidade operacional por meio de documentacao, processo e organizacao de sistemas",
            "Atuei em ambientes remotos e multiculturais com alto padrao de entrega e responsabilidade",
          ],
          icon: <FaBriefcase className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
      ],
    },
    es: {
      title: "Experiencia",
      intro: "Experiencia operativa en infraestructura de TI naval, equipos internacionales de tecnologia, estabilidad de sistemas y comunicacion multicultural.",
      roles: [
        {
          title: "IT Support Technician, Marina de Brasil",
          company: "Marinha do Brasil",
          period: "Sep 2021 - Sep 2024",
          summary:
            "Servi en la Base Naval de Aratu apoyando infraestructura de TI mission-critical, entornos de red, rutinas de acceso y continuidad operativa bajo protocolos navales estrictos.",
          bullets: [
            "Mantuve entornos Windows, Linux, Samba y redes para operaciones militares",
            "Apoye politicas de seguridad, control de acceso y estabilidad de infraestructura",
            "Construí una mentalidad disciplinada por jerarquia naval, rutina y responsabilidad",
          ],
          icon: <FaAnchor className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "International Technology Specialist",
          company: "Upwork",
          period: "Feb 2025 - Actualidad",
          summary:
            "Trabaje con equipos internacionales en software, mobile, IA y sistemas en produccion, fortaleciendo comunicacion, resolucion de problemas y estandares de entrega entre culturas.",
          bullets: [
            "Colabore con founders y equipos de diferentes paises, zonas horarias y contextos de negocio",
            "Actue en estabilidad de sistemas, troubleshooting y flujos operativos bajo presion real",
            "Mantuve perfil Top Rated Plus con 100% Job Success por consistencia y ownership",
          ],
          icon: <FaRocket className="text-3xl text-cyan-600 dark:text-cyan-300" />,
        },
        {
          title: "Lead Product Engineer, Equipos Internacionales",
          company: "The Galindo Consulting Group, Inc.",
          period: "Abr 2026 - Sep 2026",
          summary:
            "Lidere ejecucion tecnica para equipos globales, traduciendo prioridades de negocio en flujos organizados, sistemas confiables y comunicacion clara entre stakeholders.",
          bullets: [
            "Coordine prioridades entre stakeholders tecnicos y no tecnicos",
            "Reduje complejidad operativa mediante documentacion, procesos y organizacion de sistemas",
            "Trabaje en entornos remotos y multiculturales con alto estandar de entrega y responsabilidad",
          ],
          icon: <FaBriefcase className="text-3xl text-cyan-600 dark:text-cyan-300" />,
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
            className="relative group bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#0b2436] dark:via-[#071b2a] dark:to-[#0d2f43] p-6 md:p-7 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-700"></div>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 via-transparent to-blue-400/20 blur-xl"></div>
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="mb-4 md:mb-5 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="p-3 md:p-3.5 lg:p-4 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-2xl shadow-md group-hover:shadow-lg border border-white/10">
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
