export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="py-8 px-4 text-center text-slate-600 dark:text-gray-400 text-base">
        © {currentYear} Clariana Abreu. All Rights Reserved
      </footer>
    );
  }


