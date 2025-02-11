import "./globals.css";
import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/header";
import { Services } from './components/Services';
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="container-center">
            <Navbar />
            <Header />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
          </main>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
