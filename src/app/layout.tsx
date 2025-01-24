
import "./globals.css";
import React, { ReactNode } from "react";
import {Header} from './components/header';
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Contacts} from './components/Contacts';
import {translations} from './components/LanguageSwitcher'

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const language = "pt"; // Altere para "en" ou "es" conforme necessário
  const t = translations[language];

  return (
      <html lang="en">
          <body className="bg-zinc-900 text-white">
             
              <main className="container-center">
                <Header/>
                  <About />
                  <Skills />
                  <Projects />
                  <Contacts />
              </main>
              {children}
          </body>
      </html>
  );
}

