import Link from "next/link";
import ThemeChanger from "./DarkSwitcher";

export const Navbar = () => {
  const navigation = [
    "About me",
    "Skills",
    "Projects",
    "Contacts",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-10 mx-auto lg:justify-between xl:px-1">
        {/* Logo ou Ícone */}
        
        {/* Get Started e Theme Changer */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2 flex items-center">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Get Started
            </Link>
          </div>
          <ThemeChanger />
        </div>

        {/* Menu de navegação para dispositivos maiores */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu de navegação para dispositivos menores */}
        <div className="lg:hidden flex items-center">
          <button 
            type="button" 
            className="text-gray-500 hover:text-indigo-500 focus:outline-none" 
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};
