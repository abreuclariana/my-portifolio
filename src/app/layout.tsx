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
import Script from 'next/script'; // Importe o componente Script

// ✅ NOVO BLOCO CORRETO
export const viewport = {
  themeColor: "#FF0081",
};

// ✅ SEM o themeColor aqui
export const metadata = {
  metadataBase: new URL('https://clariana.vercel.app'),
  title: "Clariana Abreu | Front-End Developer",
  description:
    "Portfólio profissional de Clariana Abreu, desenvolvedora Front-End especializada em React, Next.js e Node.js.",
  keywords: [
    "Clariana Abreu",
    "Feont-End Developer",
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
    title: "Clariana Abreu | Full Stack Developer",
    description: "Explore os projetos e habilidades de Clariana Abreu no desenvolvimento web moderno.",
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
    title: "Clariana Abreu | Front-End Developer",
    description: "Portfólio de projetos modernos com React, Next.js e mais.",
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
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XVJP97R1F4`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XVJP97R1F4');
          `}
        </Script>
      </head>
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
