import React from "react";
import { projects } from "../projects/projects";
import Projectcarousel from "./Projectcarousel";

const Projects = () => {
  return (
    <>
      <section id="projects" className="border-t-2 pt-8 mx-5">
        <p className="text-center">My own projects</p>
        <Projectcarousel projects={projects} />
      </section>
    </>
  );
};

export default Projects;
