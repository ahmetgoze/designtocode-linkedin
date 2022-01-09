import React from "react";
import styles from "./Card.module.css";
const Card = ({ children, style }) => {
  return (
    <div className={styles["card_container"]} style={style}>
      {children}
    </div>
  );
};

export default Card;
