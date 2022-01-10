import React from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import styles from "./ProfileContent.module.css";
import ProfileHeader from "./ProfileHeader";
import Projects from "./Projects";
import Skills from "./Skills";
import Tabs from "./Tabs";
import Card from "./UI/Card";
const ProfileContent = ({
  user,
  userProjects,
  userSkills,
  userExperience,
  userEducation,
}) => {
  return (
    <div className={styles["content"]}>
      <Card>
        <ProfileHeader user={user} />
      </Card>
      <Tabs />
      <Card>
        <About user={user} />
      </Card>
      <Card style={{ margin: "3rem 0rem" }}>
        <Projects user={user} userProjects={userProjects} />
      </Card>
      <Card>
        <Skills userSkills={userSkills} />
      </Card>
      <Card style={{ margin: "3rem 0rem" }}>
        <Experience userExperience={userExperience} />
      </Card>
      <Card>
        <Education userEducation={userEducation} />
      </Card>
    </div>
  );
};

export default ProfileContent;
