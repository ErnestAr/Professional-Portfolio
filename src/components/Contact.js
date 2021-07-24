import React from "react";
import  { useState } from 'react'
 import {DiGithubBadge} from 'react-icons/di'
 import {AiOutlineMail} from 'react-icons/ai'
 import {SiLinkedin, SiSlack, SiGithub} from 'react-icons/si'


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <footer className="py-6 bg-coolGray-100 text-coolGray-900">
          <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
            <div className="grid grid-cols-12">
              
            </div>
            <div className="grid justify-center pt-6 lg:justify-between">
              <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                <span>©2021 All Rights Reserved</span>
              </div>
              <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                <a href="https://github.com/ErnestAr" className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50">
                  <SiGithub className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4" />
                </a>
                <a href="mailto:arutiunian.ernest@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50">
                  <AiOutlineMail  className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4" />
                </a>
                <a href="https://www.linkedin.com/in/ernest-arutiunian-ab5b991a4/" className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-coolGray-50">
                  <SiLinkedin  className="text-indigo-500 w-8 h-8 flex-shrink-0 mr-4" />
                </a>
              </div>
            </div>
          </div>
</footer>
    </section>
  );
}