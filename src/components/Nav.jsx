import { useState } from "react";

import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={toggle ? close : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 orange-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link, i) => (
                <li key={i} className="hover:">
                  <a
                    href={link.href}
                    className="font-montserrat text-md leading-normal text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
