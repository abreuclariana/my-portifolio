"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { useTranslation } from "../../contexts/TranslationContext";

export function Skills() {
    const { t } = useTranslation();
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: "Bootstrap", icon: <img src="/img/bootstrap-original.svg" alt="Bootstrap" className="w-12 h-12 mx-auto" /> },
        { name: "Tailwind CSS", icon: <img src="/img/tailwindcss-logo.svg" alt="Tailwind CSS" className="w-12 h-12 mx-auto" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
        { name: "TypeScript", icon: <img src="/img/typescript-logo.svg" alt="TypeScript" className="w-12 h-12 mx-auto" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
        { name: "Vitejs", icon: <img src="/img/vitejs-original.svg" alt="Vitejs" className="w-12 h-12 mx-auto" /> },
        { name: "Next.js", icon: <img src="/img/nextjs-logo.svg" alt="Next.js" className="w-12 h-12 mx-auto" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        { name: "EJS", icon: <img src="/img/ejs-original.svg" alt="EJS" className="w-12 h-12 mx-auto" /> },
        { name: "WordPress", icon: <img src="/img/wordpress-original.svg" alt="WordPress" className="w-12 h-12 mx-auto" /> },
    ];

    return (
        <section
            id="skills"
            className="py-10 mt-20 mb-10 text-center bg-white text-gray-600 dark:bg-zinc-900 dark:text-white scroll-smooth"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 lg:mb-20">{t("skills.title")}</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {skills.map((skill) => (
                    <li
                        key={skill.name}
                        className="relative group bg-gradient-to-br from-white via-gray-50 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-4 md:p-5 lg:p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-zinc-700/80 overflow-hidden transform transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1"
                    >
                        {/* Gradiente de fundo animado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                        
                        {/* Borda brilhante no hover */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-400/50 dark:group-hover:border-indigo-500/50 transition-all duration-300"></div>

                        {/* Conteúdo */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="mb-3 md:mb-3.5 lg:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="p-2 md:p-2.5 lg:p-3 bg-white/80 dark:bg-zinc-900/50 rounded-xl shadow-sm group-hover:shadow-md backdrop-blur-sm">
                                    {skill.icon}
                                </div>
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {skill.name}
                            </h3>
                        </div>

                        {/* Efeito de brilho sutil */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-transparent to-purple-400/20 blur-xl"></div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
