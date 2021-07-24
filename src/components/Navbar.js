
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800  top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-end">
      <nav className="	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-2xl">
            About
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-2xl">
            Portfolio
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white text-2xl">
            Contact
          </a>
          <a href="./Resume.pdf" className="mr-5 hover:text-white text-2xl">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

