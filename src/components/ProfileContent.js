import React from "react";
import styles from "./ProfileContent.module.css";
import ProfileHeader from "./ProfileHeader";
import Card from "./UI/Card";
const ProfileContent = ({ user }) => {
  return (
    <div className={styles["content"]}>
      <Card style={{ padding: "2rem 3rem 3.5rem 3rem" }}>
        <ProfileHeader user={user} />
      </Card>
    </div>
  );
};

export default ProfileContent;
