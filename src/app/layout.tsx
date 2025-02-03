
import "./globals.css";
import React, { ReactNode } from "react";
import ThemeChanger from './components/DarkSwitcher';
import {Navbar} from './components/Navbar';
import {Header} from './components/header'; // Importação padrão
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Faq} from './components/Faq';
import {Contacts} from './components/Contacts';
import {Footer} from './components/Footer';
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
            <ThemeChanger />
              <Navbar/>
                <Header/>
                  <About />
                  <Skills />
                  <Projects />
                  <Faq/>
                  <Contacts />
                  <Footer/>
              </main>
              {children}
          </body>
      </html>
  );
}

