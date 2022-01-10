import React from "react";
import styles from "./ProfileHeader.module.css";
const ProfileHeader = ({ user }) => {
  return (
    <div className={styles["profile_header"]}>
      <div className={styles["profile_cover"]}>
        <img src={user.profileCover} alt="" />
      </div>
      <div className={styles["profile_cover-buttons"]}>
        <button className={styles["alternative-button"]}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_99)">
              <path
                d="M8.0257 3.61491H3.35903C3.00541 3.61491 2.66627 3.75539 2.41622 4.00544C2.16617 4.25549 2.0257 4.59463 2.0257 4.94825V14.2816C2.0257 14.6352 2.16617 14.9743 2.41622 15.2244C2.66627 15.4744 3.00541 15.6149 3.35903 15.6149H12.6924C13.046 15.6149 13.3851 15.4744 13.6352 15.2244C13.8852 14.9743 14.0257 14.6352 14.0257 14.2816V9.61491"
                stroke="#181818"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0257 2.61484C13.2909 2.34962 13.6506 2.20062 14.0257 2.20062C14.4008 2.20062 14.7605 2.34962 15.0257 2.61484C15.2909 2.88005 15.4399 3.23976 15.4399 3.61484C15.4399 3.98991 15.2909 4.34962 15.0257 4.61484L8.69236 10.9482L6.0257 11.6148L6.69236 8.94817L13.0257 2.61484Z"
                stroke="#181818"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_99">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.692383 0.948242)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Edit Profile</span>
        </button>
        <button className={styles["settings-button"]}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
              fill="#181818"
              stroke="#181818"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19Z"
              fill="#181818"
              stroke="#181818"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5Z"
              fill="#181818"
              stroke="#181818"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles["profile_bottom-part"]}>
        <div className={styles["profile_photo"]}>
          <img src={user.profilePicture} alt="" />
        </div>
        <div className={styles["profile_info"]}>
          <div className={styles["profile-top"]}>
            <div className={styles["profile-name"]}>
              <span>{user.name}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V10C0 12.8284 0 14.2426 0.87868 15.1213C1.75736 16 3.17157 16 6 16H10C12.8284 16 14.2426 16 15.1213 15.1213C16 14.2426 16 12.8284 16 10V6C16 3.17157 16 1.75736 15.1213 0.87868C14.2426 0 12.8284 0 10 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM3.99344 5.01216C3.33466 5.01216 2.8 4.47202 2.8 3.80608C2.8 3.14014 3.33466 2.6 3.99344 2.6C4.65222 2.6 5.18688 3.14014 5.18688 3.80608C5.18688 4.47202 4.6529 5.01216 3.99344 5.01216ZM2.97049 13.4V5.87911H5.01639V13.4H2.97049ZM11.1541 13.4H13.2V8.77876C13.2 5.18719 9.37894 5.31778 8.42623 7.08587V5.87911H6.38033V13.4H8.42623V9.56845C8.42623 7.44004 11.1541 7.26569 11.1541 9.56845V13.4Z"
                  fill="url(#paint0_linear_1_87)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_87"
                    x1="8"
                    y1="0"
                    x2="8"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D8C281" />
                    <stop offset="1" stopColor="#AC9B69" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles["profile-location"]}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6.33328L12.6667 0.333282L6.66667 12.9999L5.33333 7.66662L0 6.33328Z"
                  fill="#0275B1"
                />
              </svg>

              <span>{user.location}</span>
            </div>
          </div>
          <div className={styles["profile-center"]}>{user.bio}</div>
          <div className={styles["profile-bottom"]}>
            <button className={styles["main-button"]}>Contact Info</button>
            <button
              className={styles["side-button"]}
            >{`${user.connections} connections`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
