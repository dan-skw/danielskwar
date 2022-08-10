import React from "react";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className=" border-2 flex flex-row justify-center w-auto h-auto rounded-xl py-6 my-10 mx-10"
      >
        <span className="px-24 w-1/2 border-r-2">
          <ul>
            <div>
              <h1 className="font-bold text-2xl pb-5">I'm using</h1>
            </div>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS/SASS/Tailwind</li>
            <li>Python</li>
            <li>Flask basics</li>
          </ul>
        </span>
        <span className="px-24 w-1/2">
          <ul>
            <div>
              <h1 className="font-bold text-2xl pb-5">I want to know</h1>
            </div>
            <li>ReactJS</li>
            <li>TypeScript</li>
            <li>Styled-components</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li></li>
          </ul>
        </span>
      </section>
    </>
  );
};

export default Skills;
