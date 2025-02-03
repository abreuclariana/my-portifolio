"use client";

import { section } from 'framer-motion/m';
import { useState } from 'react';

const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, you can.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the current index
  };

  return (
    <section id='faq' className=" border-b border-zinc-700">
    <div className="w-full max-w-3xl p-30 mt-40 mb-40 mx-auto rounded-2xl ">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-white">FAQ</h2>
        <p className="text-white mt-2">
          Frequently Asked Questions
        </p>
        <p className="text-gray-300 text-2x1 mt-1">
          Answer your customers' possible questions here, it will increase the conversion rate as well as support or chat requests.
        </p>
      </div>
      
      {faqdata.map((item, index) => (
        <div key={index} className="mb-5">
          <div
            className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <span>{item.question}</span>
            <span
              className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
            >
              &#x25B6; {/* Simple arrow character */}
            </span>
          </div>
          {openIndex === index && (
            <div className="px-4 pt-4 pb-2 text-white">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
};
