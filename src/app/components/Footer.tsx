export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="py-8 px-4 text-center bg-white dark:bg-[#07080c] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 text-base">
        © {currentYear} Clariana Abreu. All Rights Reserved
      </footer>
    );
  }


