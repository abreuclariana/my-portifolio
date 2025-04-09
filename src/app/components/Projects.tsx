export function Projects() {
    const projects = [
        { 
            name: "Project 1", 
            description: "API-weather-forecast", 
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
            name: "Project 2", 
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
       
        { 
            name: "Project 3", 
            description: "🔒 Authentication System", 
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
            name: "Project 4", 
            description: "Web Form Application", 
            link: "https://github.com/abreuclariana/web-form-application", 
            technologies: [
                "/img/tailwindcss-logo.svg", 
                "/img/javascript-original.svg", 
                "/img/react-original.svg",  
                "/img/nodejs-original.svg",
                "/img/nodemon-original.svg",
                "/img/express-original.svg",
            ]
        },

        { 
            name: "Project 5", 
            description: "Modal Pop-Up", 
            link: "https://github.com/abreuclariana/tipscode-modal", 
            technologies: [
                "/img/html5-original.svg", 
                "/img/css3-original.svg", 
                "/img/javascript-original.svg"
            ]
        },
        { 
            name: "Project 6", 
            description: "CL Burger Project", 
            link: "https://github.com/abreuclariana/hamburger-shop-delivery", 
            technologies: [
                "/img/html5-original.svg", 
                "/img/css3-original.svg", 
                "/img/tailwindcss-logo.svg", 
                "/img/javascript-original.svg"
            ]
        },
    ];

    return (
        <section 
            id="projects" 
            className="py-10 mt-35 text-center bg-white text-gray-900 dark:bg-zinc-900 dark:text-white scroll-smooth"
        >
            <h2 className="py-10 text-5xl font-bold mb-10 text-gray-600 dark:text-white">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <a
                        key={project.name}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block bg-gray-100 dark:bg-zinc-800 p-8 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-zinc-700"
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

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
