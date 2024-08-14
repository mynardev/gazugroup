"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Nav, { NavMobile } from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 xl:py-6 text-gray-600 bg-background shadow-lg">
      <div className="container mx-auto mt-0 flex justify-between items-center">
        {/* logo input */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">ECO</h1>
        </Link>

        <div className="flex-1 flex justify-center">
          {/* desktop nav */}
          <div className="hidden xl:flex items-center text-center">
            <Nav />
          </div>
        </div>

        <div className="hidden xl:flex items-center">
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground py-2 px-6 rounded hover:bg-primary-hover transition duration-300">
              Kontakt
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden flex flex-col items-center bg-white text-black space-y-4 p-4">
          <NavMobile />
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground py-2 px-5 rounded hover:bg-primary-hover transition duration-300">
              Kontakt
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
