export function About() {
  return (
    <section id="about" className="py-40 border-b border-gray-700 text-center">
      {/* Título centralizado */}
      <h2 className="text-5xl font-bold mb-28">About Me</h2>

      {/* Container flexível para layout em colunas */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-32 gap-12">
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/img/background.jpg" 
            alt="Foto de Clariana Abreu"
            className="w-96 h-96 md:w-[500px] md:h-[500px] rounded-lg object-cover shadow-2xl"
          />
        </div>

        {/* Coluna do Texto */}
        <div className="w-full md:w-1/2 text-justify">
          <p className="text-2xl text-gray-300 leading-relaxed tracking-wide">
            I'm a developer with a passion for technology and programming, with a degree in Systems Analysis and Development from Estácio de Sá, and 3 years' solid experience in Web Development. I have experience in various technologies, including React, Next.js and other modern tools for creating web applications. My goal is always to deliver effective, high-quality solutions. 

            <br /><br />

            In addition, I served for 3 years in the Brazilian Navy, where I worked as a User Support Technician in the Information Technology Service (ITS) sector at the Aratu Naval Base, giving me a broad view of information technology and systems.
          </p>
        </div>
      </div>
    </section>
  );
}

  
