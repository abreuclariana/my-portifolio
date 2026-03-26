import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { TranslationProvider } from "../contexts/TranslationContext";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/header";

const About = dynamic(() => import("./components/About").then(mod => mod.About), { ssr: true });
const Services = dynamic(() => import('./components/Services').then(mod => mod.Services), { ssr: true });
const Skills = dynamic(() => import("./components/Skills").then(mod => mod.Skills), { ssr: true });
const Projects = dynamic(() => import("./components/Projects").then(mod => mod.Projects), { ssr: true });
const Contacts = dynamic(() => import("./components/Contacts").then(mod => mod.Contacts), { ssr: true });
const Footer = dynamic(() => import("./components/Footer").then(mod => mod.Footer), { ssr: true });

// ✅ NOVO BLOCO CORRETO
export const viewport = {
  themeColor: "#FF0081",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL('https://clariana.vercel.app'),
  title: "Clariana Silva de Abreu | Full Stack Developer",
  description:
    "Portfólio profissional de Clariana Silva de Abreu, Full Stack Developer com foco em React, Next.js, Node.js e arquitetura escalável.",
  keywords: [
    "Clariana Abreu",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfólio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Clariana Abreu", url: "https://github.com/abreuclariana" }],
  creator: "Clariana Abreu",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Clariana Silva de Abreu | Full Stack Developer",
    description: "Explore projetos, experiencia e habilidades full stack em produtos escalaveis e de alta performance.",
    url: "https://clarianaabreu.vercel.app/", // substitua com seu domínio real
    siteName: "Clariana Abreu",
    images: [
      {
        url: "/preview.png", // adicione essa imagem na pasta `public`
        width: 1200,
        height: 630,
        alt: "Clariana Abreu Banner ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clariana Silva de Abreu | Full Stack Developer",
    description: "Portfólio com experiencia full stack, microservicos e produtos web modernos.",
    creator: "@clariana.abreu", // opcional, substitua pelo seu user real do Twitter se tiver
    images: ["/preview.png"],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TranslationProvider>
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
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}