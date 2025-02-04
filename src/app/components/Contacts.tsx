import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Contacts() {
  return (
    <section id="contact" className="py-40 text-center mb-10 px-6">
      <h2 className="text-5xl font-bold mb-20 text-white">Contacts</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto items-center">
        {/* Coluna da esquerda - Ícones de contato */}
        <div>
          <p className="text-2xl text-gray-300 max-w-lg mx-auto mb-12">
          Contact me via the links below, or fill in the form
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://github.com/abreuclariana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/clariana-abreu-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:abreuclariana@gmail.com"
              className="text-gray-400 hover:text-white transition-all text-4xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Coluna da direita - Formulário de contato */}
        <div className="bg-zinc-900 p-10 rounded-xl shadow-xl border border-zinc-700">
          <h3 className="text-3xl font-semibold text-white mb-2">
            How can we help?
          </h3>
          <p className="text-gray-400 mb-6">
            We usually respond in a few hours.
          </p>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 bg-zinc-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-zinc-700"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-zinc-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-zinc-700"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 text-sm">Your Message</label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                className="w-full p-3 bg-zinc-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-zinc-700"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all font-semibold text-lg shadow-md hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
