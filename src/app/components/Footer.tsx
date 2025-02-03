import Link from "next/link";
import React from "react";

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];

  return (
    <div className="relative">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
            >
              <span>Nextly</span>
            </Link>
          </div>

          <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            Nextly is a free landing page & marketing website template for
            startups and indie projects. It's built with Next.js & TailwindCSS.
            And it's completely open-source.
          </div>
        </div>

        <div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href="/"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {legal.map((item, index) => (
              <Link
                key={index}
                href="/"
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
        <a href="https://web3templates.com/" target="_blank" rel="noopener">
          Web3Templates.
        </a>{" "}
        Illustrations from{" "}
        <a href="https://www.glazestock.com/" target="_blank" rel="noopener">
          Glazestock
        </a>
      </div>

      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <span>Web3Templates</span>
    </a>
  );
};

