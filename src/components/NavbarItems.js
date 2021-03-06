import React from "react";
import styles from "./NavbarItems.module.css";
import rss from "../assets/rss.svg";
import users from "../assets/users.svg";
import briefcase from "../assets/briefcase.svg";
import messageSquare from "../assets/message-square.svg";
import bell from "../assets/bell.svg";
// import { FeedIcon } from "../svgroot";
const NavbarItems = () => {
  const FeedIcon = (
    <svg
      className={styles["items_icon"]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
        stroke="#0275B1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
      <path
        d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
        stroke="#0275B1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
      <path
        d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
        stroke="#0275B1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
    </svg>
  );

  const NetworkIcon = (
    <svg
      className={styles["items_icon"]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const JobsIcon = (
    <svg
      className={styles["items_icon"]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ChatIcon = (
    <svg
      className={styles["items_icon"]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const NoticesIcon = (
    <svg
      className={styles["items_icon"]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const navbarItems = [
    {
      icon: FeedIcon,
      text: "Feed",
    },
    {
      icon: NetworkIcon,
      text: "Network",
      notification: 2,
    },
    {
      icon: JobsIcon,
      text: "Jobs",
    },
    {
      icon: ChatIcon,
      text: "Chat",
      notification: 23,
    },
    {
      icon: NoticesIcon,
      text: "Notices",
      notification: 1,
    },
  ];
  return (
    <>
      {navbarItems.length > 0 && (
        <ul className={styles["items_container"]}>
          {navbarItems.map((Item, index) => {
            return (
              <li key={`Item_${index}`} className={styles["item"]}>
                {Item.notification && (
                  <div className={styles["notification"]}>
                    <span className={styles["notification_quantity"]}>
                      {Item.notification}
                    </span>
                  </div>
                )}
                {Item.icon}
                <span className={Item.active && styles.active}>
                  {Item.text}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavbarItems;
