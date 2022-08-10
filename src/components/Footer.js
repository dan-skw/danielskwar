import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-center py-10 border-t-2">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/dan-skw" alt="my-github">
            <FaGithubSquare size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-skwarczek-23451b237/"
            alt="my-linkedin"
          >
            <FaLinkedin size={40} />
          </a>
        </div>
        <p className="text-center">&copy; Daniel Skwarczek 2022</p>
      </footer>
    </>
  );
};

export default Footer;
