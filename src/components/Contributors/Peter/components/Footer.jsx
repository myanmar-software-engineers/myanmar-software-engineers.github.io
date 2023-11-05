"use-client";
import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer className="container mx-auto footer" id="contact">
      <a href="#hero">
        <div className="return-home">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 24 24"
          >
            <title></title>
            <path
              fill="white"
              d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
            ></path>
          </svg>
        </div>
      </a>
      <div className="socials">
        <a
          href="https://github.com/peterlianpi"
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider
            value={{ color: "white", className: "socials__icons" }}
          >
            <div>
              <FaGithub />
            </div>
          </IconContext.Provider>{" "}
        </a>
        <a
          href="mailto:peterpausianlian2020@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider
            value={{ color: "white", className: "socials__icons" }}
          >
            <div>
              <FaEnvelope />
            </div>
          </IconContext.Provider>
        </a>

        <a
          className="text-blue-600 hover:underline my-1"
          href="https://www.facebook.com/p.lianpi"
        >
          <IconContext.Provider
            value={{ color: "white", className: "socials__icons" }}
          >
            <div>
              <FaFacebook />
            </div>
          </IconContext.Provider>
        </a>
        <a
          className="text-blue-600 hover:underline my-1"
          href="https://www.linkedin.com/in/peter-pau-sian-lian-214092282/"
        >
          <IconContext.Provider
            value={{ color: "white", className: "socials__icons" }}
          >
            <div>
              <FaLinkedin />
            </div>
          </IconContext.Provider>{" "}
        </a>
        <a
          className="text-blue-600 hover:underline my-1"
          href="https://www.youtube.com/@peterpausianlian"
        >
          <IconContext.Provider
            value={{ color: "white", className: "socials__icons" }}
          >
            <div>
              <FaYoutube />
            </div>
          </IconContext.Provider>
        </a>
      </div>
      <p className="copyright">Peter ©2023</p>
    </footer>
  );
}
export default Footer;
