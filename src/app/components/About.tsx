export function About() {
  return (
    <section id="about" className="mt-30 py-10 text-center scroll-smooth">
      {/* Título centralizado */}
      <h2 className="text-5xl font-bold mb-20 text-gray-600 dark:text-gray-100">
        About Me
      </h2>

      {/* Container flexível para layout em colunas */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-32 gap-20">
        
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/img/background.jpg"
            alt="Foto de Clariana Abreu"
            className="w-96 h-96 md:w-[700px] md:h-[600px] rounded-lg object-cover shadow-2xl border border-gray-300 dark:border-gray-600"
          />
        </div>

        {/* Coluna do Texto */}
        <div className="w-full md:w-1/2 text-justify">
         <p className="text-2xl leading-relaxed tracking-wide dark:text-gray-100 text-gray-600 mb-4">
          I'm a developer with a passion for technology and programming, 
          with a degree in Systems Analysis and Development from Estácio de Sá, 
          and 3 years solid experience in Web Development. I have experience 
          in various technologies, including React, Next.js, and other modern 
          tools for creating web applications. My goal is always to deliver 
          effective, high-quality solutions. Additionally, I have experience creating websites with WordPress and Elementor, ensuring visually appealing and well-structured designs tailored to client needs.
         </p>

         <p className="text-2xl leading-relaxed tracking-wide dark:text-gray-100 text-gray-600 mb-4">
            In addition, I served for 3 years in the Brazilian Navy, where I 
            worked as a User Support Technician in the Information Technology 
            Service (ITS) sector at the Aratu Naval Base, giving me a broad view 
            of information technology and systems.
        </p>

        </div>
      </div>
    </section>
  );
}
