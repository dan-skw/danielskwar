import React from "react";
import coding from "./62.png";
const Me = () => {
  return (
    <>
      <section
        id="me"
        className="flex flex-col justify-center items-center mt-20"
      >
        <p className="typing w-auto">Hello! I'm Daniel, aspring developer.</p>
        <p className="text-center w-3/4">
          I'm 22 years old Computer Science student of University of Economics
          in Cracow. <br></br>
          I'm interested in web development, especially in Frontend. In my plans
          I want to learn more about React and its ecosystem but also to learn
          more about backend.
        </p>
        <img src={coding} alt="mad coding" />
      </section>
    </>
  );
};

export default Me;
