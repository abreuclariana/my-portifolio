import { img } from 'framer-motion/m';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

export function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: "Tailwind CSS", icon: <img src="/img/tailwindcss-logo.svg" alt="Tailwind CSS" className="w-12 h-12 mx-auto" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
        { name: "TypeScript", icon: <img src="/img/typescript-logo.svg" alt="TypeScript" className="w-12 h-12 mx-auto" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
        { name: "Next.js", icon: <img src="/img/nextjs-logo.svg" alt="Next.js" className="w-12 h-12 mx-auto" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        // Logo do Tailwind CSS
    ];

    return (
        <section id="skills" className="py-60 bg-zinc-900 text-center border-b border-gray-700">
            <h2 className="text-5xl font-bold mb-20 text-white">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                {skills.map((skill) => (
                    <li
                        key={skill.name}
                        className="bg-zinc-800 p-8 rounded-lg shadow-lg hover:bg-zinc-700 transition-all transform hover:scale-105 group relative"
                    >
                        <div className="mb-4 flex justify-center">
                            {skill.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
