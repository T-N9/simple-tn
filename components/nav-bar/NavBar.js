  
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ToggleTheme from "./ToggleTheme";

/* constants */
import routes from "@/constants/routes";

/* Icons */
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const route = usePathname();
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="container lg:max-w-4xl mx-auto flex items-center justify-between py-2 px-5 bg-opacity-50 backdrop-filter backdrop-blur-lg lg:rounded-2xl tn-shadow-1 fixed top-0 lg:top-5 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-end">
          <Link href="/">
            <span className="text-3xl font-bold font-heading text-primary dark:text-accent">
              tn
            </span>
            .dev
          </Link>
        </div>
        <ul className="hidden lg:flex space-x-7 text-sm">
          {routes.map((item, index) => {
            return (
              <li className="relative" key={index}>
                <Link
                  href={item.route}
                  className={`${
                    item.route === route && "text-primary dark:text-accent"
                  } hover:text-primary dark:hover:text-accent transition-colors`}
                >
                  {item.name}
                  {item.route === route && (
                    <span className="absolute inset-x-1 -bottom-4 left-1/2 -translate-x-1/2 w-[220%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 dark:from-accent/0 dark:via-accent/40 dark:to-accent/0"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            setShowNav((prev) => !prev);
          }}
          className="lg:hidden text-dark dark:text-light hover:text-white focus:outline-none"
        >
          {showNav ? <IoClose size={30} /> : <LuMenu size={30} />}
        </button>
        <div className=" absolute -right-14">
          <ToggleTheme />
        </div>
      </nav>
      <div
        className={`flex fixed lg:hidden top-[54px] py-5 left-0 right-0 justify-center bg-opacity-50 backdrop-filter backdrop-blur-lg z-40 tn-shadow-1 min-h-screen transition-all duration-300 ${
          showNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className=" text-xl flex flex-col gap-6 items-center w-1/2">
          {routes.map((item, index) => {
            return (
              <li className="relative" key={index}>
                <Link
                  href={item.route}
                  className={`${
                    item.route === route && "text-primary dark:text-accent"
                  } hover:text-primary dark:hover:text-accent transition-colors`}
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  {item.name}
                  {item.route === route && (
                    <span className="absolute inset-x-1 -bottom-1 left-1/2 -translate-x-1/2 w-[220%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 dark:from-accent/0 dark:via-accent/40 dark:to-accent/0"></span>
                  )}
                </Link>
              </li>
            );
          })}
          <ToggleTheme />
        </ul>
      </div>
    </>
  );
};

export default NavBar;
