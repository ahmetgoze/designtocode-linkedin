import React from "react";
import Navbar from "../components/Navbar";
import ProfileContent from "../components/ProfileContent";
import Sidebar from "../components/Sidebar";
import Main from "../components/UI/Main";

const ProfilePage = ({ children, user, visitors, courses }) => {
  return (
    <div>
      <Navbar user={user} />
      <Main>
        <ProfileContent />
        <Sidebar user={user} visitors={visitors} courses={courses} />
      </Main>
    </div>
  );
};

export default ProfilePage;
