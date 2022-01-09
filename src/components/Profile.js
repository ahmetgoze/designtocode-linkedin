import React from "react";
import styles from "./Profile.module.css";
const Profile = ({ user }) => {
  const arrowIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.50024 8.50021L8.50025 3.50021"
        stroke="#02B033"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.50024 3.50021H8.50025V8.50021"
        stroke="#02B033"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles["profile_container"]}>
      <div className={styles["profile_user"]}>
        <div className={styles["user_picture"]}>
          <img src={user.picture} alt="" />
        </div>
        <div className={styles["user_info"]}>
          <div className={styles["user_name"]}>
            <div className={styles["user_name-left"]}>{user.name}</div>
            <div className={styles["user_name-right"]}>YOU</div>
          </div>
          <div className={styles["profile_view"]}>
            <span
              className={styles["profile_view-left"]}
            >{`${user.views} views today`}</span>
            <div className={styles["profile_view-right"]}>
              <span>{`+${user.increased}`}</span>
              {arrowIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
