"use client";

import { FaAward, FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "../../contexts/TranslationContext";

const recommendations = [
  {
    name: "Yahshemi Walters",
    profileUrl: "https://www.linkedin.com/in/yahshemi/",
    headline:
      "I help employers access diverse, job-ready tech talent | Client Engagement | Apprenticeships • Military Talent • Workforce Development",
    relationship: "Em 18 de setembro de 2026, Yahshemi foi mentor de Clariana",
    text: [
      "Clariana came into our SkillBridge cohort as a guest speaker and immediately connected with the room. What stood out most wasn't just her story, it was the way she told it. Her background in the Brazilian Navy gave her credibility with our transitioning service members, but it was her adaptability and the way she carries her military values into every new environment that made the session genuinely impactful. Any team would be lucky to have her.",
    ],
  },
  {
    name: "Victor Ruan",
    profileUrl:
      "https://www.linkedin.com/in/victor-ruan-76b39a270/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bo75PV5sdRnOd7%2FpObV9BpA%3D%3D",
    headline:
      "Desenvolvedor Full Stack | React, Node.js, TypeScript, Python & SQL | APIs REST e Arquitetura Back-End",
    relationship: "Em 17 de setembro de 2026, Victor trabalhou na mesma equipe que Clariana",
    text: [
      "Tive a honra de servir ao lado da Clariana na Marinha do Brasil, período em que atuamos na área de Tecnologia da Informação como técnicos em redes de computadores. Naquela época, ela também foi minha superior, o que me permitiu acompanhar de perto sua competência profissional e, principalmente, sua capacidade de liderança.",
      "Clariana sempre se destacou pela disciplina, responsabilidade e comprometimento com suas funções. Além de conduzir as atividades com seriedade e excelência, sabia orientar, apoiar e motivar aqueles que estavam sob sua liderança. Sua forma de liderar era baseada no exemplo, na organização, no respeito e no genuíno senso de responsabilidade com toda a equipe.",
      "Anos depois, tive a satisfação de acompanhar sua transição e seu crescimento na área de desenvolvimento de software, consolidando uma trajetória de sucesso na engenharia e na liderança. Essa evolução reflete características que ela já demonstrava desde a época da Marinha: facilidade para aprender, capacidade de adaptação, equilíbrio para trabalhar sob pressão e segurança para assumir grandes responsabilidades.",
      "Tenho enorme satisfação em ter servido com a Clariana e em acompanhar sua trajetória. É uma profissional extremamente competente, versátil e confiável, além de uma excelente líder. Recomendo seu trabalho com total confiança e tenho certeza de que continuará se destacando em todos os desafios profissionais que decidir assumir.",
    ],
  },
];

export function Recognition() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Recognition",
      programTitle: "Creating Coding Careers SkillBridge",
      programText:
        "Invited as a guest speaker to share a military-to-tech transition with U.S. service members, covering leadership, discipline, fundamentals, and building an international software career from the ground up.",
      recommendationsTitle: "Recommendations",
      received: "Recebidas (4)",
      provided: "Fornecidas (1)",
    },
    pt: {
      title: "Reconhecimento",
      programTitle: "Creating Coding Careers SkillBridge",
      programText:
        "Convidada como guest speaker para compartilhar sua transicao da carreira militar para tecnologia com militares dos EUA, abordando lideranca, disciplina, fundamentos e construcao de uma carreira internacional em software.",
      recommendationsTitle: "Recomendações",
      received: "Recebidas (4)",
      provided: "Fornecidas (1)",
    },
    es: {
      title: "Reconocimiento",
      programTitle: "Creating Coding Careers SkillBridge",
      programText:
        "Invitada como guest speaker para compartir su transicion de la carrera militar a tecnologia con militares de EE.UU., abordando liderazgo, disciplina, fundamentos y construccion de una carrera internacional en software.",
      recommendationsTitle: "Recomendaciones",
      received: "Recebidas (4)",
      provided: "Fornecidas (1)",
    },
  }[language];

  return (
    <section id="recognition" className="py-12 mt-10 text-center text-slate-800 dark:text-gray-100 scroll-smooth">
      <h2 className="py-6 md:py-8 lg:py-10 text-4xl md:text-5xl font-normal mb-4 text-slate-800 dark:text-[#f0f4ff]">
        {content.title}
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:px-6 md:px-8">
        <article className="rounded-lg border border-slate-200 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/5 md:p-8">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
            <FaAward className="text-2xl" />
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-slate-50">
            {content.programTitle}
          </h3>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {content.programText}
          </p>
        </article>

        <div className="rounded-lg border border-slate-200 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/5 md:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
              {content.recommendationsTitle}
            </h3>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              <span>{content.received}</span>
              <span>{content.provided}</span>
            </div>
          </div>

          <div className="grid gap-5">
            {recommendations.map((recommendation) => (
              <article
                key={recommendation.name}
                className="rounded-lg border border-slate-200 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-black/20 md:p-6"
              >
                <FaQuoteLeft className="mb-4 text-xl text-cyan-700 dark:text-cyan-200" />
                <a
                  href={recommendation.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-slate-900 transition-colors hover:text-cyan-700 dark:text-slate-50 dark:hover:text-cyan-200"
                >
                  {recommendation.name}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {recommendation.headline}
                </p>
                <p className="mt-3 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
                  {recommendation.relationship}
                </p>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {recommendation.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
