export function Projects() {
    const projects = [
        { name: "Projeto 1", description: "Web Form Apllication 1", link: "https://github.com/abreuclariana/web-form-application" },
        { name: "Projeto 2", description: "Modal Pop-Up 2", link: "https://github.com/abreuclariana/tipscode-modal" },
        { name: "Projeto 3", description: "Projeto Sons de bateria", link: "https://github.com/abreuclariana/drum-sounds-project" },
        
    ];

    return (
        <section id="projects" className="py-20 border-b border-gray-700 text-center">
            <h2 className="text-4xl font-bold mb-10 mt-10">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        className="block bg-zinc-800 p-6 rounded-lg shadow-md hover:bg-zinc-700 transition-colors"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-lg text-gray-300">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}