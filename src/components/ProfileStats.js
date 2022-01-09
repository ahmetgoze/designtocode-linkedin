import React from "react";
import styles from "./ProfileStats.module.css";
const ProfileStats = ({ user }) => {
  return (
    <div>
      <div className={styles["stats_header"]}>
        <div className={styles["stats_left"]}>Your Dashboard</div>
        <div className={styles["stats_right"]}>
          <a href="#">Go to stats</a>
        </div>
      </div>
      <div className={styles["stats"]}>
        <div className={styles["stats-bottom"]}>
          <span className={styles["quantity"]}>{user.views}</span>
          <span className={styles["text"]}>Views today</span>
        </div>
        <div className={styles["stats-bottom"]}>
          <span className={styles["quantity"]}>{user.postsViews}</span>
          <span className={styles["text"]}>Posts views</span>
        </div>
        <div className={styles["stats-bottom"]}>
          <span className={styles["quantity"]}>
            {user.searchAppereances}
          </span>
          <span className={styles["text"]}>Search appereances</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
