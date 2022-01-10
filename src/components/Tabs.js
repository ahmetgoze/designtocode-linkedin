import React from "react";
import styles from "./Tabs.module.css";
const Tabs = () => {
  return (
    <div className={styles["tabs"]}>
      <button className={`${styles["tab"]} ${styles["active"]}`}>
        <span>Profile</span>
      </button>
      <button className={styles["tab"]}>
        <span>Activity & Interests</span>
      </button>
      <button className={styles["tab"]}>
        <span>Articles (3)</span>
      </button>
    </div>
  );
};

export default Tabs;
