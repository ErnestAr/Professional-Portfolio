import React from "react";

export default function About() {
  return (
    <section id="about" className = "mt-20 mb-12">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" text-5xl mb-4 font-medium text-white">
           Ernest Arutiunian
          </h1>
          <h3 className=" text-xl mb-4 font-medium text-white">  Full-Stack Developer | Web Developer  </h3>
          <p className="mb-8 leading-relaxed">
            Hey there! My name is Ernest, I am a Full-Stack Developer from Ontario, Canada and I love coding. I have experience working with a MERN framework, React, Redux, and Node.js as well as Python, Django, and Flask.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover: rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding-1.svg"
          />
        </div>
      </div>
    </section>
  );
}


