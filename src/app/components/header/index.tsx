import Image from "next/image";

export const Header = () => {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center p-6">
      <header className="flex flex-col-reverse lg:flex-row items-center justify-center w-full h-screen py-8 text-center lg:text-left">
        
        {/* Texto e Botões */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-6">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Clariana Abreu
          </h1>
          <h2 className="py-5 text-2xl text-gray-500 lg:text-3xl dark:text-gray-300">
            Front-End Developer
          </h2>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-md"
            >
              Download for Free
            </a>
            <a
              href="https://github.com/web3templates/nextly-template/"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
            >
              <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>GitHub</title>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422
      18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
      1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809
      1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0
      0 1.005-.322 3.3 1.23.96-.267 1.98-.399
      3-.405 1.02.006 2.04.138 3 .405 2.28-1.552
      3.285-1.23 3.285-1.23.645 1.653.24 2.873.12
      3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805
      5.625-5.475 5.92.42.36.81 1.096.81 2.22 0
      1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565
      22.092 24 17.592 24 12c0-6.627-5.373-12-12-12Z"
  />
</svg>

              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Imagem */}
        
        {/* Preload para a imagem linkedin.png */}
        <link
          rel="preload"
          href="/img/linkedin.png"
          as="image"
          type="image/png"
          crossOrigin="anonymous"
        />

        {/* Sua imagem com o Next.js Image component */}
        <Image
          src="/img/linkedin.png"
          width={400}
          height={400}
          className="rounded-lg w-auto h-auto"
          alt="LinkedIn Logo"
          loading="eager"
          priority
        />

      </header>
    </main>
  );
};

export default Header;
