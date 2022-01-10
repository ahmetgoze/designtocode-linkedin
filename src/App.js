import ProfilePage from "./pages/ProfilePage";
import user1 from "./assets/user1.png";
import user1profilepicture from "./assets/user1profilepicture.png";
import user1cover from "./assets/user1cover.png";
import userProject1 from "./assets/userProject1.png";
import userProject2 from "./assets/userProject2.png";
import userProject3 from "./assets/userProject3.png";
import visitor1 from "./assets/visitor1.png";
import visitor2 from "./assets/visitor2.png";
import visitor3 from "./assets/visitor3.png";
import visitor4 from "./assets/visitor4.png";
import visitor5 from "./assets/visitor5.png";
import course1 from "./assets/course1.png";
import course2 from "./assets/course2.png";
import course3 from "./assets/course3.png";
import uxApproval from "./assets/uxApproval.png";
import uiApproval from "./assets/uiApproval.png";
import brandApproval from "./assets/brandApproval.png";
import upwork from "./assets/upwork.png";
import education1 from "./assets/education1.png";

function App() {
  const user = {
    picture: user1,
    profilePicture: user1profilepicture,
    name: "Dmitry Kargaev",
    location: "Saint Petersburg, Russian Federation",
    bio: "Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.",
    about:
      "I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. ",
    profileCover: user1cover,
    connections: "1,043",
    views: 367,
    increased: 15,
    postsViews: 15,
    searchAppereances: 9,
  };

  const userProjects = [
    {
      name: "Zara redesign concept",
      subInfo: "UX/UI design, 15.07.2019",
      picture: userProject1,
    },
    {
      name: "SCTHON event brand identity",
      subInfo: "Graphic design, 03.31.2019",
      picture: userProject2,
    },
    {
      name: "Drozd. Brand identity. 2016",
      subInfo: "Graphic design, 03.04.2016",
      picture: userProject3,
    },
  ];

  const userSkills = [
    {
      name: "User experience (UX)",
      approval: 6,
      people: uxApproval,
    },
    {
      name: "User interface (UI)",
      approval: 7,
      people: uiApproval,
    },
    {
      name: "Brand identity",
      approval: 5,
      people: brandApproval,
    },
  ];

  const userExperience = [
    {
      picture: upwork,
      title: "Freelance UX/UI designer",
      company: "Self Employed",
      location: "Around the world",
      startingData: "Jun 2016 — Present",
      totalDuration: "3 yrs 3 mos",
      description:
        "Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.",
    },
    {
      picture: upwork,
      title: "UX/UI designer",
      company: "Upwork",
      location: "International",
      startingData: "Jun 2019 — Present",
      totalDuration: "3 mos",
      description:
        "New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.",
    },
  ];

  const userEducation = [
    {
      picture: education1,
      name: "Moscow State Linguistic University",
      field:
        "Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance",
      date: "2013 — 2017",
      description: "Additional English classes and UX profile courses​.",
    },
  ];

  const profileVisitors = [
    {
      picture: visitor1,
      name: "Darlene Black",
      info: "HR-manager, 10 000 connec...",
    },
    {
      picture: visitor2,
      name: "Theresa Steward",
      info: "iOS developer",
    },
    {
      picture: visitor3,
      name: "Brandon Wilson",
      info: "Senior UX designer",
    },
    {
      picture: visitor4,
      name: "Kyle Fisher",
      info: "Product designer at Com...",
    },
    {
      picture: visitor5,
      name: "Audrey Alexander",
      info: "Team lead at Google",
    },
  ];

  const courses = [
    {
      picture: course1,
      name: `UX Foundations:
      Prototyping`,
      viewers: "27,959",
    },
    {
      picture: course2,
      name: `Designing with
      Adobe XD and pro`,
      viewers: "9,122",
    },
    {
      picture: course3,
      name: `UX Foundations:
      Styles and GUIs`,
      viewers: "13,858",
    },
  ];

  const languages = ["English", "Turkish", "Romanian"];
  return (
    <div>
      <ProfilePage
        user={user}
        visitors={profileVisitors}
        courses={courses}
        languages={languages}
        userProjects={userProjects}
        userSkills={userSkills}
        userExperience={userExperience}
        userEducation={userEducation}
      />
    </div>
  );
}

export default App;
