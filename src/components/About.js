import React from "react";
import styles from "./About.module.css";
const About = ({ user }) => {
  return (
    <div className={styles["about_content"]}>
      <div className={styles["header"]}>About</div>
      <div className={styles["content"]}>{user.about}</div>
      <a href="#" className={styles["link"]}>
        See More
      </a>
    </div>
  );
};

export default About;
