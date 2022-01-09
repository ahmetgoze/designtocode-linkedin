import React from "react";
import ProfileCourses from "./ProfileCourses";
import ProfileStats from "./ProfileStats";
import ProfileVisitors from "./ProfileVisitors";
import styles from "./Sidebar.module.css";
import Card from "./UI/Card";
const Sidebar = ({ user, visitors, courses }) => {
  return (
    <div className={styles["sidebar"]}>
      <Card>
        <ProfileStats user={user} />
      </Card>
      <Card>
        <ProfileVisitors visitors={visitors} />
      </Card>
      <Card>
        <ProfileCourses courses={courses} />
      </Card>
    </div>
  );
};

export default Sidebar;
