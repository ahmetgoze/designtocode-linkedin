import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileContent from "../components/ProfileContent";
import Sidebar from "../components/Sidebar";
import Main from "../components/UI/Main";

const ProfilePage = ({
  children,
  user,
  visitors,
  courses,
  languages,
  userProjects,
  userSkills,
  userExperience,
  userEducation,
}) => {
  return (
    <div>
      <Navbar user={user} />
      <Main>
        <ProfileContent
          user={user}
          userProjects={userProjects}
          userSkills={userSkills}
          userExperience={userExperience}
          userEducation={userEducation}
        />
        <Sidebar user={user} visitors={visitors} courses={courses} />
      </Main>
      <Footer languages={languages} />
    </div>
  );
};

export default ProfilePage;
