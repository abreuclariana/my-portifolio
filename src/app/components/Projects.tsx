"use client";

import { useTranslation } from "../../contexts/TranslationContext";

export function Projects() {
    const { language, t } = useTranslation();

    const details = {
        en: {
            title: "Selected Work",
            intro: "Production work across SaaS architecture, mobile migration, AI systems, and tooling delivered for international teams.",
            cards: {
                saasBooking: {
                    role: "Full-stack architecture",
                    result: "Scheduling, secure auth, payments, and AI-assisted workflows in one stack.",
                    bullets: ["Next.js App Router", "Supabase with RLS", "Stripe and OpenAI integrations"],
                },
                beepr: {
                    role: "Mobile migration and geospatial backend",
                    result: "Production-ready React Native system with real-time location constraints.",
                    bullets: ["Expo and native background services", "PostGIS jurisdiction logic", "50+ Supabase Edge Functions"],
                },
                happyKids: {
                    role: "Frontend leadership for an AI education platform",
                    result: "Trilingual, accessible product experience for a Global Top 30 AI Social Impact project.",
                    bullets: ["React and TypeScript", "Responsive UX architecture", "OpenAI-powered user flows"],
                },
                shoutex: {
                    role: "SEO tooling and Chrome extension engineering",
                    result: "Real-time DOM analysis in a modular UI prepared for future AI features.",
                    bullets: ["Manifest V3", "Fast DOM parsing", "Product-ready interface"],
                },
            },
        },
        pt: {
            title: "Projetos Selecionados",
            intro: "Projetos reais com foco em impacto de produto, migracao de arquitetura, sistemas com IA e software pronto para producao.",
            cards: {
                saasBooking: {
                    role: "SaaS booking com IA e backend seguro",
                    result: "Plataforma de agendamento com arquitetura full stack, autenticacao segura, pagamentos e fluxos assistidos por IA.",
                    bullets: ["Next.js App Router", "Supabase com RLS", "Integracoes com Stripe e OpenAI"],
                },
                beepr: {
                    role: "Marketplace mobile dos EUA com geolocalizacao e compliance",
                    result: "Migracao tecnica de um prototipo Capacitor para React Native Expo, com geofencing, push e logica jurisdicional em producao.",
                    bullets: ["Expo e servicos nativos em background", "Logica jurisdicional em PostGIS", "51 Supabase Edge Functions auditadas"],
                },
                happyKids: {
                    role: "Lideranca frontend em plataforma educacional com IA",
                    result: "Execucao visual e arquitetural de uma plataforma trilingue reconhecida como Global Top 30 AI Social Impact.",
                    bullets: ["React e TypeScript", "Arquitetura UX responsiva", "Fluxos com OpenAI"],
                },
                shoutex: {
                    role: "Extensao Chrome para SEO com base pronta para IA",
                    result: "Engine de analise DOM em tempo real para metricas SEO, com arquitetura preparada para integracoes futuras com OpenAI.",
                    bullets: ["Manifest V3", "DOM parsing veloz", "Interface pronta para produto"],
                },
            },
        },
        es: {
            title: "Trabajo Seleccionado",
            intro: "Una mezcla de arquitectura SaaS, migracion mobile, sistemas con IA y tooling de produccion para equipos internacionales.",
            cards: {
                saasBooking: {
                    role: "Arquitectura full stack",
                    result: "Agendamiento, autenticacion segura, pagos y flujos con IA en una sola stack.",
                    bullets: ["Next.js App Router", "Supabase con RLS", "Integraciones con Stripe y OpenAI"],
                },
                beepr: {
                    role: "Migracion mobile y backend geoespacial",
                    result: "Sistema React Native listo para produccion con restricciones reales de ubicacion.",
                    bullets: ["Expo y servicios nativos en background", "Logica jurisdiccional en PostGIS", "50+ Supabase Edge Functions"],
                },
                happyKids: {
                    role: "Liderazgo frontend para plataforma educativa con IA",
                    result: "Experiencia trilingue y accesible para un proyecto Global Top 30 AI Social Impact.",
                    bullets: ["React y TypeScript", "Arquitectura UX responsiva", "Flujos con OpenAI"],
                },
                shoutex: {
                    role: "Herramienta SEO e ingenieria de extension Chrome",
                    result: "Analisis DOM en tiempo real con interfaz modular preparada para funciones de IA.",
                    bullets: ["Manifest V3", "DOM parsing rapido", "Interfaz lista para producto"],
                },
            },
        },
    }[language];
    
    const projects = [
        {
            key: "saasBooking",
            inDevelopment: false,
            link: "https://github.com/abreuclariana/nextjs-ts-consulting-scheduler",
            screenshots: [
                { src: "/img/saas.png", label: "saas" },
                { src: "/img/saas1.png", label: "saas1" }
            ],
            technologies: [
                "/img/nextjs-logo.svg",
                "/img/react-original.svg",
                "/img/typescript-logo.svg",
                "/img/tailwindcss-logo.svg",
                "/img/supabase-original.svg",
                "/img/postgresql-original.svg",
                "/img/vercel-original.svg"
            ]
        },
         { 
            key: "beepr",
            inDevelopment: false,
            link: "https://apps.apple.com/us/app/beepr-your-cannabis-your-way/id6749667346",  
            image: "/img/beepr_icon.png",
            screenshots: [
                { src: "/img/loc-not.jfif", label: "loc-not" },
                { src: "/img/captura-de-tela.png", label: "captura-de-tela" }
            ],
            technologies: [
                "/img/react-original.svg",
                "/img/typescript-logo.svg",
                "/img/supabase-original.svg",
                "/img/postgresql-original.svg"
            ]
        },
        { 
            key: "happyKids",
           
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7398733254893387776/",  
            screenshots: [
                { src: "/img/lulu-home.png", label: "lulu-home" },
                { src: "/img/emotions-feelings.png", label: "emotions-feelings" }
            ],
            technologies: [
                "/img/react-original.svg",
                "/img/typescript-logo.svg",
                "/img/vitejs-original.svg",
                "/img/tailwindcss-logo.svg",
                "/img/nodejs-original.svg",
                "/img/postgresql-original.svg",
                "/img/express-original.svg"
            ]
        },
        { 
            key: "shoutex",
            inDevelopment: false,
            link: "https://chromewebstore.google.com/detail/shoutex-inseo/lognkgbmklicmgphmdiioneegmcancbh",  
            image: "/img/banner1.png",
            technologies: [
                "/img/html5-original.svg", 
                "/img/css3-original.svg",   
                "/img/javascript-original.svg"
            ]
        },
      
       
    ];

    return (
        <section 
            id="projects" 
            className="py-12 mt-10 text-center text-slate-800 dark:text-gray-100 scroll-smooth"
        >
            <h2 className="py-6 md:py-8 lg:py-10 text-4xl md:text-5xl font-normal mb-4 text-slate-800 dark:text-[#f0f4ff]">
                {details.title}
            </h2>
            <p className="mx-auto mb-8 max-w-3xl px-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                {details.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {projects.map((project) => (
                    <a
                        key={project.key}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#0b2436] dark:via-[#071b2a] dark:to-[#0d2f43] p-6 md:p-7 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
                    >
                        {/* Gradiente de fundo animado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-700"></div>
                        
                        {/* Brilho sutil no hover */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 via-transparent to-blue-400/20 blur-xl"></div>
                        </div>
                        
                        {/* Borda brilhante no hover */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-500"></div>

                        {/* Conteúdo */}
                        <div className="relative z-10">
                            {/* Imagem de capa */}
                            {project.image && (
                                <div className="mb-4 md:mb-5 lg:mb-6 -mx-6 md:-mx-7 lg:-mx-8 -mt-6 md:-mt-7 lg:-mt-8 rounded-t-3xl overflow-hidden h-40 md:h-48 lg:h-56">
                                    <img
                                        src={project.image}
                                        alt={t(`projects.${project.key}.name`)}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            )}
                            
                            {/* Badge para projetos em desenvolvimento */}
                            {project.inDevelopment && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 text-xs font-bold text-cyan-700 dark:text-cyan-200 bg-cyan-500/10 border border-cyan-300/30 rounded-full shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                                    </span>
                                    {t("projects.inDevelopment")}
                                </span>
                            )}

                            {project.screenshots && (
                                <div className="mb-4 md:mb-5 grid grid-cols-2 gap-2">
                                    {project.screenshots.map((shot) => (
                                        <div key={shot.src} className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                                            <img
                                                src={shot.src}
                                                alt={`${t(`projects.${project.key}.name`)} ${shot.label}`}
                                                className="w-full h-24 md:h-28 object-cover"
                                            />
                                            <span className="block py-1 text-[10px] tracking-wider uppercase text-cyan-700 dark:text-cyan-200 bg-slate-100 dark:bg-black/30">
                                                {shot.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            <h3 className="text-xl md:text-xl lg:text-2xl font-semibold mb-2 md:mb-2.5 lg:mb-3 text-slate-900 dark:text-[#f0f4ff] group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                                {t(`projects.${project.key}.name`)}
                            </h3>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
                                {details.cards[project.key as keyof typeof details.cards].role}
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-gray-300 mb-4 md:mb-5 lg:mb-6 min-h-[3rem] md:min-h-[3.25rem] lg:min-h-[3.5rem]">
                                {details.cards[project.key as keyof typeof details.cards].result}
                            </p>

                            <ul className="mb-5 space-y-2 text-left text-sm text-slate-600 dark:text-slate-300">
                                {details.cards[project.key as keyof typeof details.cards].bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-2">
                                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tecnologias */}
                            <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 pt-4 md:pt-4.5 lg:pt-5 border-t border-slate-200 dark:border-white/10">
                                {project.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="p-2 md:p-2.5 bg-slate-50 dark:bg-white/5 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow-md group-hover:bg-white/40 dark:group-hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-white/10"
                                    >
                                        <img
                                            src={tech}
                                            alt={`Tech ${index}`}
                                            className="w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ícone de seta no hover */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <div className="p-2 bg-cyan-500/15 rounded-full border border-cyan-300/30">
                                <svg
                                    className="w-5 h-5 text-cyan-700 dark:text-cyan-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}



