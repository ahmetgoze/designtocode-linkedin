import React from "react";
import styles from "./Main.module.css";
const Main = ({ children, style }) => {
  return (
    <div className={styles["main-container"]}>
      <main className={styles["main"]} style={style}>
        {children}
      </main>
    </div>
  );
};

export default Main;
