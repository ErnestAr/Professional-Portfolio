
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800  top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-end">
      <nav className="	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Portfolio
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Contact
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

