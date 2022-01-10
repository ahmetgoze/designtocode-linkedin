import React from "react";
import styles from "./Skills.module.css";

const Skills = ({ userSkills }) => {
  return (
    <div className={styles["skills_content"]}>
      <div className={styles["header"]}>
        <span>Skills & Endoresments</span>
      </div>
      <ul className={styles["contents"]}>
        {userSkills.map((skill) => {
          return (
            <li className={styles["content"]}>
              <div className={styles["content-info"]}>
                <a href="#">{skill.name}</a>
                <span>{skill.approval}</span>
              </div>
              <div className={styles["bottom"]}>
                <img src={skill.people} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
      <a href="#" className={styles["link"]}>
        Show all (17)
      </a>
    </div>
  );
};

export default Skills;
