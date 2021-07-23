// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import {FaPython, FaNodeJs, FaReact, FaBootstrap} from 'react-icons/fa';
import React from "react";
import { skills, languages } from "../data";
import {DiJavascript1, DiMongodb} from 'react-icons/di';
import {SiMysql, SiGraphql, SiTailwindcss} from 'react-icons/si';



export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Following are a set of technologies and programming languages that use in my web projects as well as team projects I participated in throughout my Full-Stack Developer Journey. 
          </p>
        </div>
        <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
          {skills.map((skill) => (
            <div key={skill} className="p-2  w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                 {skill === "Python 3"  ? <FaPython className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "JavaScript"  ? <DiJavascript1 className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "React"  ? <FaReact className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "MySQL"  ? <SiMysql className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "MongoDB"  ? <DiMongodb className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "Node JS"  ? <FaNodeJs className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "GraphQL"  ? <SiGraphql className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "Bootstrap"  ? <FaBootstrap className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                 {skill === "TailWind CSS"  ? <SiTailwindcss className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />: ""}
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}