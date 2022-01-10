import React from "react";
import styles from "./Experience.module.css";
const Experience = ({ userExperience }) => {
  return (
    <div className={styles["experience_content"]}>
      <div className={styles["header"]}>
        <span>Experience</span>
      </div>
      <ul className={styles["contents"]}>
        {userExperience.map((experience, id) => {
          return (
            <li className={styles["content"]} key={`Experience_${id}`}>
              <img src={experience.picture} alt="" />
              <div className={styles["content-info"]}>
                <a href="#">{experience.title}</a>
                <div className={styles["content-info_middle"]}>
                  <div className={styles["content-info_middle-top"]}>
                    <div className={styles["content-info_middle-top-left"]}>
                      {experience.company}
                    </div>
                    <div className={styles["content-info_middle-top-right"]}>
                      {experience.location}
                    </div>
                  </div>
                  <div className={styles["content-info_middle-bottom"]}>
                    <div className={styles["content-info_middle-bottom-left"]}>
                      {experience.startingData}
                    </div>
                    <div className={styles["content-info_middle-bottom-right"]}>
                      {experience.totalDuration}
                    </div>
                  </div>
                </div>
                <div className={styles["content-info-bottom"]}>
                  {experience.description}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
