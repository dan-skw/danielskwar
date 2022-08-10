import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projectcarousel = ({ projects }) => {
  return (
    <>
      {projects &&
        projects.map((project) => {
          const { id, name, desc, stack, url, photo } = project;
          console.log(project.photo);
          return (
            <article
              key={id}
              className="singleproject flex flex-col sm:flex-row text-center justify-center sm:justify-evenly items-center border-2 m-5 rounded-lg"
            >
              <div className="w-48 h-48">
                <img src={photo} alt={name} className="projimg" />
              </div>
              <div className=" w-4/6 px-5 py-7 ">
                <h1 className="text-bold text-3xl">{name}</h1>
                <div className="flex flex-col border-2 p-5 mt-5">
                  <p className="text-xl">{stack}</p>
                  <p>{desc}</p>
                  <p className="flex justify-center">
                    <a href={url}>
                      <FaGithub size={25} />
                    </a>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default Projectcarousel;
