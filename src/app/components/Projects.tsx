export function Projects() {
    const projects = [
        { 
            name: "Project 1", 
            description: "Web Form Application", 
            link: "https://github.com/abreuclariana/web-form-application", 
            technologies: [
                "/img/tailwindcss-logo.svg", 
                "/img/javascript-original.svg", 
                "/img/react-original.svg", 
                "/img/nodejs-original.svg"
            ]
        },
        { 
            name: "Project 2", 
            description: "Modal Pop-Up", 
            link: "https://github.com/abreuclariana/tipscode-modal", 
            technologies: [
                "/img/html5-original.svg", 
                "/img/css3-original.svg", 
                "/img/javascript-original.svg"
            ]
        },
        { 
            name: "Project 3", 
            description: "Drum Sounds Project", 
            link: "https://github.com/abreuclariana/drum-sounds-project", 
            technologies: [
                "/img/html5-original.svg", 
                "/img/css3-original.svg", 
                "/img/javascript-original.svg"
            ]
        },
        { 
            name: "Project 4", 
            description: "To Do List", 
            link: "https://github.com/abreuclariana/lista-to-do-list",  
            technologies: [
                "/img/html5-original.svg", 
                "/img/css3-original.svg", 
                "/img/javascript-original.svg",
                "/img/react-original.svg",
            ]
        },
        { 
            name: "Project 5", 
            description: "My Portifólio", 
            link: "https://github.com/abreuclariana/my-portifolio",  
            technologies: [
                "/img/html5-original.svg", 
                "/img/css3-original.svg", 
                "/img/tailwindcss-logo.svg", 
                "/img/javascript-original.svg",
                "/img/typescript-logo.svg",
                "/img/nextjs-logo.svg",
            ]
        },
    ];

    return (
        <section id="projects" className="py-60 bg-zinc-900 text-center border-b border-zinc-700">
            <h2 className="py-10 text-5xl font-bold mb-10 text-white">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block bg-gradient-to-r from-zinc-800 to-zinc-700 p-8 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l hover:from-zinc-600 hover:to-zinc-500"
                    >
                    
                        <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
                        <p className="text-lg text-gray-300 mb-4">{project.description}</p>

                        {/* Efeito de fundo com gradiente e opacidade */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-800 group-hover:to-indigo-800 opacity-20 group-hover:opacity-40 transition-opacity"></div>

                        {/* Efeito de borda */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {/* Imagens das tecnologias */}
                        <div className="mt-4 flex justify-center gap-4">
                            {project.technologies.map((tech, index) => (
                                <img key={index} src={tech} alt={`Tecnologia ${index}`} className="w-10 h-10" />
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
