"use client";

import { useTranslation } from "../../contexts/TranslationContext";

export function Projects() {
    const { t } = useTranslation();
    
    const projects = [
        { 
            name: "Project 1", 
            description: "Happy Kids Educational Plataform (In Development)", 
            link: "https://github.com/MVP-Psicologia-Positiva/happy-kids-frontend",  
            technologies: [
                "/img/react-original.svg",
                "/img/typescript-logo.svg",
                "/img/vitejs-original.svg",
                "/img/tailwindcss-logo.svg",
                "/img/vitest-original.svg",
                "/img/postgresql-original.svg"
                
            ]
        },
        { 
            name: "Project 2", 
            description: "Shoutex inSEO Chrome Extension", 
            link: "https://chromewebstore.google.com/detail/shoutex-inseo/lognkgbmklicmgphmdiioneegmcancbh",  
            technologies: [
                 "/img/html5-original.svg", 
                "/img/css3-original.svg",   
                "/img/javascript-original.svg",
                
            ]
        },
        { 
            name: "Project 3", 
            description: "Realtime-External-API-Integration-Example", 
            link: "https://github.com/abreuclariana/API-weather-forecast",  
            technologies: [
                "/img/ejs-original.svg", 
                "/img/bootstrap-original.svg",  
                "/img/javascript-original.svg",
                "/img/nodejs-original.svg",
                "/img/nodemon-original.svg",
                "/img/express-original.svg",
            ]
        },
        { 
            name: "Project 4", 
            description: "My Portifólio", 
            link: "https://github.com/abreuclariana/my-portifolio",  
            technologies: [
                 
                "/img/tailwindcss-logo.svg", 
                "/img/javascript-original.svg",
                "/img/typescript-logo.svg",
                "/img/nextjs-logo.svg",
            ]
        },
        { 
            name: "Project 5", 
            description: "Authentication System", 
            link: "https://github.com/abreuclariana/register-authentication",  
            technologies: [ 
                "/img/ejs-original.svg",  
                "/img/javascript-original.svg",
                "/img/nodejs-original.svg",
                "/img/nodemon-original.svg",
                "/img/express-original.svg",
                "/img/mongodb-original.svg",
                "/img/mongoose-original.svg",
            ]
        },
        { 
            name: "Project 6", 
            description: "Business-Interactive-Modal-Component", 
            link: "https://github.com/abreuclariana/tipscode-modal", 
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
            className="py-10 mt-10 text-center bg-white text-gray-900 dark:bg-zinc-900 dark:text-white scroll-smooth"
        >
            <h2 className="py-6 md:py-8 lg:py-10 text-4xl md:text-5xl font-bold mb-8 md:mb-9 lg:mb-10 text-gray-600 dark:text-white">
                {t("projects.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block bg-gradient-to-br from-white via-gray-50 to-white dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-6 md:p-7 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/80 dark:border-zinc-700/80 overflow-hidden transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
                    >
                        {/* Gradiente de fundo animado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/15 group-hover:to-pink-500/10 transition-all duration-700"></div>
                        
                        {/* Brilho sutil no hover */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-transparent to-purple-400/20 blur-xl"></div>
                        </div>
                        
                        {/* Borda brilhante no hover */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-400/60 dark:group-hover:border-indigo-500/60 transition-all duration-500"></div>

                        {/* Conteúdo */}
                        <div className="relative z-10">
                            {/* Badge para projetos em desenvolvimento */}
                            {project.description.includes("In Development") && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/60 dark:to-purple-900/60 rounded-full shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                    </span>
                                    In Development
                                </span>
                            )}
                            
                            <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-2 md:mb-2.5 lg:mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                                {project.name}
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-4 md:mb-5 lg:mb-6 min-h-[3rem] md:min-h-[3.25rem] lg:min-h-[3.5rem]">
                                {project.description}
                            </p>

                            {/* Tecnologias */}
                            <div className="flex flex-wrap justify-center gap-2 md:gap-2.5 pt-4 md:pt-4.5 lg:pt-5 border-t border-gray-200/80 dark:border-zinc-700/80">
                                {project.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="p-2 md:p-2.5 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow-md group-hover:bg-white dark:group-hover:bg-zinc-800 transition-all duration-300 hover:scale-110"
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
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                                <svg
                                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
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



