import React from "react";
import styles from "./ProfileVisitors.module.css";
const ProfileVisitors = ({ visitors }) => {
  return (
    <>
      <div>
        <div className={styles["visitors_header"]}>
          <div className={styles["visitors_left"]}>Visitors</div>
          <div className={styles["visitors_right"]}>
            <a href="#">View All</a>
          </div>
        </div>
        <div className={styles["visitors"]}>
          {visitors.map((visitor, index) => {
            return (
              <div
                className={styles["visitor"]}
                key={`ProfileVisitor_${index}`}
              >
                <div className={styles["visitor_picture"]}>
                  <img src={visitor.picture} alt="visitor" />
                </div>
                <div className={styles["visitor_info"]}>
                  <div className={styles["visitor_name"]}>{visitor.name}</div>
                  <div className={styles["visitor_desc"]}>{visitor.info}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProfileVisitors;
