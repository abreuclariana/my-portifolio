export function Skills() {
    const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS", "HTML"];
    return (
        <section id="skills" className="py-20 border-b border-gray-700 text-center ">
            <h2 className="text-5xl font-bold mb-12 mt-10">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto ">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="bg-zinc-800 text-white p-4 rounded-md shadow-md hover:bg-zinc-700 transition-colors text 2x1"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}