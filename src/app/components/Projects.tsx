export function Projects() {
    const projects = [
        { name: "Projeto 1", description: "Web Form Application 1", link: "https://github.com/abreuclariana/web-form-application", icon: "📝" },
        { name: "Projeto 2", description: "Modal Pop-Up 2", link: "https://github.com/abreuclariana/tipscode-modal", icon: "📦" },
        { name: "Projeto 3", description: "Projeto Sons de bateria", link: "https://github.com/abreuclariana/drum-sounds-project", icon: "🎶" },
    ];

    return (
        <section id="projects" className="py-40 bg-zinc-900 text-center border-b border-zinc-700">
            <h2 className="py-10 text-5xl font-bold mb-10 text-white">Meus Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block bg-gradient-to-r from-zinc-800 to-zinc-700 p-8 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l hover:from-zinc-600 hover:to-zinc-500"
                    >
                        {/* Ícone flutuante */}
                        <div className="absolute top-4 right-4 text-5xl text-white opacity-80 group-hover:opacity-100 transition-opacity">
                            {project.icon}
                        </div>

                        <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
                        <p className="text-lg text-gray-300 mb-4">{project.description}</p>

                        {/* Efeito de fundo com gradiente e opacidade */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-800 group-hover:to-indigo-800 opacity-20 group-hover:opacity-40 transition-opacity"></div>

                        {/* Efeito de borda */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                ))}
            </div>
        </section>
    );
}
