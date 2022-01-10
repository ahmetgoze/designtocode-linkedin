import React from "react";
import styles from "./Education.module.css";
const Education = ({ userEducation }) => {
  return (
    <div className={styles["education_content"]}>
      <div className={styles["header"]}>
        <span>Education</span>
      </div>
      <ul className={styles["contents"]}>
        {userEducation.map((education, id) => {
          return (
            <li className={styles["content"]} key={`Education_${id}`}>
              <img src={education.picture} alt="" />
              <div className={styles["content-info"]}>
                <a href="#">{education.name}</a>
                <div className={styles["content-info_middle"]}>
                  <div className={styles["content-info_middle-top"]}>
                    {education.field}
                  </div>
                  <div className={styles["content-info_middle-bottom"]}>
                    {education.date}
                  </div>
                </div>
                <div className={styles["content-info-bottom"]}>
                  {education.description}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
