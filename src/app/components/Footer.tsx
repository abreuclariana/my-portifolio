export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="py-8 px-4 text-center bg-zinc-900 text-gray-300 text-base dark:text-gray-300 light:text-gray-600 ">
        © {currentYear} Clariana Silva de Abreu. All Rights Reserved
      </footer>
    );
  }


