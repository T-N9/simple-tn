"use client";

import Link from "next/link";

import { useTheme } from "next-themes";

import { CiDark, CiSun } from "react-icons/ci";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="container lg:max-w-4xl mx-auto flex items-center justify-between py-2 px-5 bg-opacity-50 backdrop-filter backdrop-blur-lg lg:rounded-2xl tn-shadow-1 fixed top-0 lg:top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end">
        <Link href="/">
          <span className="text-3xl font-bold font-heading text-primary dark:text-accent">
            tn
          </span>
          .dev
        </Link>
      </div>
      <ul className="hidden lg:flex space-x-7 text-sm">
        <li>
          <Link href="/about" className="hover:text-primary dark:hover:text-accent transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-primary dark:hover:text-accent transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-primary dark:hover:text-accent transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/writings" className="hover:text-primary dark:hover:text-accent transition-colors">
            Writings
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-primary dark:hover:text-accent transition-colors">
            Contact
          </Link>
        </li>
      </ul>
      <button className="lg:hidden text-dark dark:text-light hover:text-white focus:outline-none">
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div className="flex justify-center items-center absolute -right-14">
        {theme === "light" ? (
          <button className=" p-3 rounded-full shadow bg-white dark:bg-dark" onClick={() => setTheme("dark")}>
            <CiDark size={20} />
          </button>
        ) : (
          <button className=" p-3 rounded-full shadow bg-white dark:bg-dark" onClick={() => setTheme("light")}>
            <CiSun size={20} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
