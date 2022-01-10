import React from "react";
import styles from "./Projects.module.css";

const Projects = ({ userProjects }) => {
  return (
    <div className={styles["project_content"]}>
      <div className={styles["header"]}>
        <span>Projects</span>
        <span className={styles["header-right"]}>3 of 12</span>
      </div>
      <ul className={styles["contents"]}>
        {userProjects.map((project, id) => {
          return (
            <li className={styles["content"]} key={`Project_${id}`}>
              <a href="#">
                <img src={project.picture} alt="" />
              </a>
              <div className={styles["content-info"]}>
                <a href="#">{project.name}</a>
                <span>{project.subInfo}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <a href="#" className={styles["link"]}>
        Show all (12)
      </a>
      <button className={styles["left-arrow"]}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.09375 5.45312L10.4297 8.41797V10.7148L0.84375 6.27344V4.5625L10.4297 0.132812V2.42969L3.09375 5.45312Z"
            fill="#0275B1"
          />
        </svg>
      </button>
      <button className={styles["right-arrow"]}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.90625 5.54688L0.570311 2.58203L0.570311 0.285157L10.1562 4.72656L10.1562 6.4375L0.570312 10.8672L0.570312 8.57031L7.90625 5.54688Z"
            fill="#0275B1"
          />
        </svg>
      </button>
    </div>
  );
};

export default Projects;
