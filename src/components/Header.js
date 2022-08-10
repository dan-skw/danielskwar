import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header className="fixed flex flex-row justify-between items-center px-5 py-5 w-full inset-x-0">
        <h1 className="title bg-white p-2">DANIEL SKWARCZEK</h1>
        <nav className="navbar p-2">
          <ul className="flex justify-end">
            <li className="cursor-pointer mx-5">
              <Link activeClass="active" smooth spy to="me">
                Me
              </Link>
            </li>
            <li className="cursor-pointer mx-5">
              <Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
            </li>
            <li className="cursor-pointer mx-5">
              <Link activeClass="active" smooth spy to="skills">
                Skills
              </Link>
            </li>
            <li className="cursor-pointer mx-5">
              <Link activeClass="active" smooth spy to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
