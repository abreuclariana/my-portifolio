import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Contacts() {
  return (
    <section id="contact" className="py-20 text-center mb-30">
      <h2 className="text-5xl font-bold mb-10 mt-6">Contatos</h2>
      <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
        Entre em contato comigo através dos contatos abaixo
        
      </p>
      {/* Ícones de redes sociais */}
      <div className="flex justify-center gap-8 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/abreuclariana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-3xl"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/clariana-abreu-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-3xl"
        >
          <FaLinkedin />
        </a>

        {/* E-mail */}
        <a
          href="mailto:clariana.abreu@eoutlook.com"
          className="text-gray-400 hover:text-white transition-colors text-3xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

