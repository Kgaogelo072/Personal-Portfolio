import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <>
      {skills.map(({ id, title, items }) => (
        <div className="skills__group" key={id}>
          <h3 className="skills__title">{title}</h3>
          <ul className="skills__list">
            {items.map((item) => (
              <li className="skills__tag" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Skills;
