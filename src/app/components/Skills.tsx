"use client";

import { FaAnchor, FaGlobeAmericas, FaJs, FaMobileAlt, FaNetworkWired, FaNodeJs, FaReact, FaShieldAlt, FaTools, FaUsers } from 'react-icons/fa';
import { useTranslation } from "../../contexts/TranslationContext";

export function Skills() {
    const { language, t } = useTranslation();
    const copy = {
        en: {
            intro: "A practical mix of maritime readiness, IT infrastructure, systems support, and international technology experience.",
            highlights: ["Navy discipline", "IT infrastructure", "Hospitality standards", "Multilingual communication"],
        },
        pt: {
            intro: "Uma combinacao pratica de prontidao maritima, infraestrutura de TI, suporte a sistemas e experiencia internacional em tecnologia.",
            highlights: ["Disciplina naval", "Infraestrutura de TI", "Padroes de hospitalidade", "Comunicacao multilingue"],
        },
        es: {
            intro: "Una combinacion practica de preparacion maritima, infraestructura de TI, soporte de sistemas y experiencia internacional en tecnologia.",
            highlights: ["Disciplina naval", "Infraestructura de TI", "Estandares de hospitalidad", "Comunicacion multilingue"],
        },
    }[language];

    const skills = [
        { name: "Maritime Operations", icon: <FaAnchor className="text-cyan-500 text-4xl" /> },
        { name: "IT Infrastructure", icon: <FaNetworkWired className="text-cyan-400 text-4xl" /> },
        { name: "Systems Support", icon: <FaTools className="text-slate-500 text-4xl" /> },
        { name: "Security Protocols", icon: <FaShieldAlt className="text-sky-600 text-4xl" /> },
        { name: "Multicultural Teams", icon: <FaUsers className="text-blue-500 text-4xl" /> },
        { name: "Global Communication", icon: <FaGlobeAmericas className="text-blue-500 text-4xl" /> },
        { name: "TypeScript", icon: <img src="/img/typescript-logo.svg" alt="TypeScript" className="w-12 h-12 mx-auto" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
        { name: "Next.js", icon: <img src="/img/nextjs-logo.svg" alt="Next.js" className="w-12 h-12 mx-auto" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-teal-600 text-4xl" /> },
        { name: "React Native", icon: <FaMobileAlt className="text-cyan-300 text-4xl" /> },
        { name: "AI Tools", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    ];

    return (
        <section
            id="skills"
            className="py-12 mt-20 mb-10 text-center text-slate-800 dark:text-gray-100 scroll-smooth"
        >
            <h2 className="text-4xl md:text-5xl font-normal mb-12 md:mb-16 lg:mb-20 text-slate-800 dark:text-[#f0f4ff]">{t("skills.title")}</h2>
            <p className="mx-auto mb-8 max-w-3xl px-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                {copy.intro}
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4 mb-10">
                {copy.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                        {highlight}
                    </span>
                ))}
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {skills.map((skill) => (
                    <li
                        key={skill.name}
                        className="relative group bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#0b2436] dark:via-[#071b2a] dark:to-[#0d2f43] p-4 md:p-5 lg:p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1"
                    >
                        {/* Gradiente de fundo animado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                        
                        {/* Borda brilhante no hover */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/40 transition-all duration-300"></div>

                        {/* Conteúdo */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="mb-3 md:mb-3.5 lg:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="p-2 md:p-2.5 lg:p-3 bg-white/5 rounded-xl shadow-sm group-hover:shadow-md backdrop-blur-sm border border-white/10">
                                    {skill.icon}
                                </div>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-[#f0f4ff] group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                                {skill.name}
                            </h3>
                        </div>

                        {/* Efeito de brilho sutil */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 via-transparent to-blue-400/20 blur-xl"></div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
