import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Contacts() {
  return (
    <section id="contact" className="py-10 mt-20 text-center mb-10 px-6 scroll-smooth">
      <h2 className="text-5xl font-bold mb-20 text-gray-600 dark:text-gray-100">Contacts</h2>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-40 max-w-6xl mx-auto items-center">
        {/* Coluna da esquerda - Ícones de contato */}
        <div>
          <p className="text-2xl text-gray-600 dark:text-gray-200 max-w-lg mx-auto mb-12">
            Contact me via the links below
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://github.com/abreuclariana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all text-4xl dark:text-gray-400 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/clariana-abreu-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all text-4xl dark:text-gray-400 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:abreuclariana@gmail.com"
              className="text-gray-400 hover:text-white transition-all text-4xl dark:text-gray-400 dark:hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Coluna da direita - Formulário de contato */}
        {/*
        <div className="p-10 rounded-xl shadow-xl border border-zinc-700 bg-gray-600 dark:bg-zinc-800 dark:border-zinc-600">
          <h3 className="text-3xl font-semibold text-white dark:text-gray-100 mb-2">
            How can we help?
          </h3>
          <p className="text-gray-400 dark:text-gray-300 mb-6">
            We usually respond in a few hours.
          </p>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-gray-300 dark:text-gray-200 mb-2 text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 bg-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 dark:text-gray-200 mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 dark:text-gray-200 mb-2 text-sm">Your Message</label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                className="w-full p-3 bg-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100 dark:placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all font-semibold text-lg shadow-md hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
        */}
      </div>
    </section>
  );
}
