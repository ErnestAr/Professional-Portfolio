
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800  top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-end">
      <nav className="	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white text-xl">
            About
          </a>
          <a href="#projects" className="mr-5 hover:text-white text-xl">
            Portfolio
          </a>
          <a href="#contact" className="mr-5 hover:text-white text-xl">
            Contact
          </a>
          <a href="./Resume.pdf" className="mr-5 hover:text-white text-xl">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

