import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileContent from "../components/ProfileContent";
import Sidebar from "../components/Sidebar";
import Main from "../components/UI/Main";

const ProfilePage = ({ children, user, visitors, courses, languages }) => {
  return (
    <div>
      <Navbar user={user} />
      <Main>
        <ProfileContent user={user} />
        <Sidebar user={user} visitors={visitors} courses={courses} />
      </Main>
      <Footer languages={languages} />
    </div>
  );
};

export default ProfilePage;
