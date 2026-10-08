import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Syne, Instrument_Serif } from "next/font/google";
import { TranslationProvider } from "../contexts/TranslationContext";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/header";

const syne = Syne({ subsets: ["latin"], variable: "--font-body" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const About = dynamic(() => import("./components/About").then(mod => mod.About), { ssr: true });
const Services = dynamic(() => import('./components/Services').then(mod => mod.Services), { ssr: true });
const Skills = dynamic(() => import("./components/Skills").then(mod => mod.Skills), { ssr: true });
const Projects = dynamic(() => import("./components/Projects").then(mod => mod.Projects), { ssr: true });
const Recognition = dynamic(() => import("./components/Recognition").then(mod => mod.Recognition), { ssr: true });
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
  title: "Clariana Abreu | Maritime Operations & Tech Specialist",
  description:
    "Portfólio de Clariana Abreu, profissional com base em operacoes navais, infraestrutura de TI, colaboracao internacional e padroes de hospitalidade.",
  keywords: [
    "Clariana Abreu",
    "Maritime Operations",
    "IT Infrastructure",
    "Brazilian Navy Veteran",
    "Hospitality",
    "Cruise Operations",
    "Network Support",
    "Portfólio",
  ],
  authors: [{ name: "Clariana Abreu", url: "https://github.com/abreuclariana" }],
  creator: "Clariana Abreu",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Clariana Abreu | Maritime Operations & Tech Specialist",
    description: "Experiencia em operacoes navais, infraestrutura de TI, comunicacao multicultural e ambientes internacionais.",
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
    title: "Clariana Abreu | Maritime Operations & Tech Specialist",
    description: "Portfolio com experiencia em operacoes navais, infraestrutura de TI e colaboracao internacional.",
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
      <body className={`${syne.variable} ${instrumentSerif.variable} bg-[var(--bg)] text-[var(--text)] antialiased transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TranslationProvider>
            <main className="container-center">
              <Navbar />
              <Header />
              <About />
              <Services />
              <Skills />
              <Projects />
              <Recognition />
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
