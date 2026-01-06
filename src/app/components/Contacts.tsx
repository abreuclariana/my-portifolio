"use client";

import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

export function Contacts() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-8 md:py-10 mt-12 md:mt-16 lg:mt-20 text-center mb-8 md:mb-10 px-4 sm:px-6 md:px-8 scroll-smooth">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 lg:mb-20 text-gray-600 dark:text-gray-100">{t("contacts.title")}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-20 md:gap-32 lg:gap-40 max-w-6xl mx-auto items-center">
        {/* Coluna da esquerda - Ícones de contato */}
        <div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 max-w-lg mx-auto mb-8 md:mb-10 lg:mb-12 px-2">
            {t("contacts.description")}
          </p>
          <div className="flex justify-center gap-6 md:gap-7 lg:gap-8 mt-4 md:mt-5 lg:mt-6">
            <a
              href="https://github.com/abreuclariana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all text-3xl md:text-3xl lg:text-4xl dark:text-gray-400 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/clariana-abreu-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all text-3xl md:text-3xl lg:text-4xl dark:text-gray-400 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01d2dbae59f1642147?viewMode=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all text-3xl md:text-3xl lg:text-4xl dark:text-gray-400 dark:hover:text-white"
            >
              <FaBriefcase />
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
