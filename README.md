# designtocode-linkedin
It is an alternative look for LinkedIn, coded pixel perfect and responsive. Completed in 3 days with React and CSS Modules for a case study provided from Baykar Technologies.
Data passed through components with props.

Design File : https://www.figma.com/file/IeqgNTYTFMemBSarQnAN8x/LinkedIn-Redesign-Case?node-id=0%3A1

Live Link: https://ahmetgoze.github.io/designtocode-linkedin/

Source Directory Tree:

```
│   App.js
│   index.css
│   index.js
│
├───assets
│   │   bell.svg
│   │   brandApproval.png
│   │   briefcase.svg
│   │   course1.png
│   │   course2.png
│   │   course3.png
│   │   education1.png
│   │   Logo.svg
│   │   message-square.svg
│   │   rss.pdf
│   │   rss.svg
│   │   uiApproval.png
│   │   upwork.png
│   │   user1.png
│   │   user1cover.png
│   │   user1profilepicture.png
│   │   userProject1.png
│   │   userProject2.png
│   │   userProject3.png
│   │   users.svg
│   │   uxApproval.png
│   │   visitor1.png
│   │   visitor2.png
│   │   visitor3.png
│   │   visitor4.png
│   │   visitor5.png
│   │
│   └───fonts
│           GothamPro-Black.woff
│           GothamPro-Bold.woff
│           GothamPro-Light.woff
│           GothamPro-Medium.woff
│           GothamPro.woff
│           GothamProNarrow-Bold.woff
│           GothamProNarrow-Medium.woff
│
├───components
│   │   About.js
│   │   About.module.css
│   │   Education.js
│   │   Education.module.css
│   │   Experience.js
│   │   Experience.module.css
│   │   Footer.js
│   │   Footer.module.css
│   │   Navbar.js
│   │   Navbar.module.css
│   │   NavbarItems.js
│   │   NavbarItems.module.css
│   │   Profile.js
│   │   Profile.module.css
│   │   ProfileContent.js
│   │   ProfileContent.module.css
│   │   ProfileCourses.js
│   │   ProfileCourses.module.css
│   │   ProfileHeader.js
│   │   ProfileHeader.module.css
│   │   ProfileStats.js
│   │   ProfileStats.module.css
│   │   ProfileVisitors.js
│   │   ProfileVisitors.module.css
│   │   Projects.js
│   │   Projects.module.css
│   │   Search.js
│   │   Search.module.css
│   │   Sidebar.js
│   │   Sidebar.module.css
│   │   Skills.js
│   │   Skills.module.css
│   │   Tabs.js
│   │   Tabs.module.css
│   │
│   └───UI
│           Card.js
│           Card.module.css
│           Main.js
│           Main.module.css
│
└───pages
        ProfilePage.js
```


Data objects to create the content dynamically:

```javascript
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
  ```
  
  
  Page Component:
  
  
  ```javascript
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
  ```
  
  
  Example from a layout component: ProfileContent.js
  
  
  ```javascript
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
  ```
  
  
  
  Example from a component: ProfileHeader.js
  
  
  ```javascript
  const ProfileHeader = ({ user }) => {
  return (
    <div className={styles["profile_header"]}>
      <div className={styles["profile_cover"]}>
        <img src={user.profileCover} alt="" />
      </div>
      <div className={styles["profile_cover-buttons"]}>
        <button className={styles["alternative-button"]}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_99)">
              <path
                d="M8.0257 3.61491H3.35903C3.00541 3.61491 2.66627 3.75539 2.41622 4.00544C2.16617 4.25549 2.0257 4.59463 2.0257 4.94825V14.2816C2.0257 14.6352 2.16617 14.9743 2.41622 15.2244C2.66627 15.4744 3.00541 15.6149 3.35903 15.6149H12.6924C13.046 15.6149 13.3851 15.4744 13.6352 15.2244C13.8852 14.9743 14.0257 14.6352 14.0257 14.2816V9.61491"
                stroke="#181818"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0257 2.61484C13.2909 2.34962 13.6506 2.20062 14.0257 2.20062C14.4008 2.20062 14.7605 2.34962 15.0257 2.61484C15.2909 2.88005 15.4399 3.23976 15.4399 3.61484C15.4399 3.98991 15.2909 4.34962 15.0257 4.61484L8.69236 10.9482L6.0257 11.6148L6.69236 8.94817L13.0257 2.61484Z"
                stroke="#181818"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_99">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.692383 0.948242)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Edit Profile</span>
        </button>
        <button className={styles["settings-button"]}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
              fill="#181818"
              stroke="#181818"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19Z"
              fill="#181818"
              stroke="#181818"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5Z"
              fill="#181818"
              stroke="#181818"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles["profile_bottom-part"]}>
        <div className={styles["profile_photo"]}>
          <img src={user.profilePicture} alt="" />
        </div>
        <div className={styles["profile_info"]}>
          <div className={styles["profile-top"]}>
            <div className={styles["profile-name"]}>
              <span>{user.name}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V10C0 12.8284 0 14.2426 0.87868 15.1213C1.75736 16 3.17157 16 6 16H10C12.8284 16 14.2426 16 15.1213 15.1213C16 14.2426 16 12.8284 16 10V6C16 3.17157 16 1.75736 15.1213 0.87868C14.2426 0 12.8284 0 10 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM3.99344 5.01216C3.33466 5.01216 2.8 4.47202 2.8 3.80608C2.8 3.14014 3.33466 2.6 3.99344 2.6C4.65222 2.6 5.18688 3.14014 5.18688 3.80608C5.18688 4.47202 4.6529 5.01216 3.99344 5.01216ZM2.97049 13.4V5.87911H5.01639V13.4H2.97049ZM11.1541 13.4H13.2V8.77876C13.2 5.18719 9.37894 5.31778 8.42623 7.08587V5.87911H6.38033V13.4H8.42623V9.56845C8.42623 7.44004 11.1541 7.26569 11.1541 9.56845V13.4Z"
                  fill="url(#paint0_linear_1_87)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_87"
                    x1="8"
                    y1="0"
                    x2="8"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D8C281" />
                    <stop offset="1" stopColor="#AC9B69" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles["profile-location"]}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6.33328L12.6667 0.333282L6.66667 12.9999L5.33333 7.66662L0 6.33328Z"
                  fill="#0275B1"
                />
              </svg>

              <span>{user.location}</span>
            </div>
          </div>
          <div className={styles["profile-center"]}>{user.bio}</div>
          <div className={styles["profile-bottom"]}>
            <button className={styles["main-button"]}>
              <span>Contact Info</span>
            </button>
            <button className={styles["side-button"]}>
              <span>{`${user.connections} connections`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
  ```
  
  Example from a CSS Module: ProfileHeader.module.css
  
  
  ```css
  .profile_header {
  display: flex;
  flex-direction: column;
}

.profile_cover {
  position: absolute;
  top: 0;
  left: 0;
}

.profile_cover img {
  width: 100%;
  cursor: pointer;
  /* height: 18rem; */
}

.profile_cover-buttons {
  position: absolute;
  top: 2rem;
  right: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.alternative-button {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0rem 1rem 3rem rgba(113, 123, 133, 0.05);
  border-radius: 0.4rem;
  border: none;
  font-size: 1.2rem;
  line-height: 1.1rem;
  text-transform: uppercase;
  padding: 1.3rem 1.1rem 1.2rem 1.1rem;
  font-family: inherit;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 1rem;
  height: 3.6rem;
}

.alternative-button svg {
  width: 1.6rem;
  height: 1.6rem;
}

.settings-button {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0rem 1rem 3rem rgba(113, 123, 133, 0.05);
  border-radius: 0.4rem;
  border: none;
  font-size: 1.2rem;
  line-height: 1.1rem;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 3.6rem;
  height: 3.6rem;
}

.settings-button svg {
  width: 2.4rem;
  height: 2.4rem;
}

.profile_bottom-part {
  margin-top: 13.7rem;
  display: flex;
  align-items: flex-end;
  gap: 2.5rem;
  z-index: 10;
}

.profile_photo img {
  width: 16rem;
  height: 16rem;
  cursor: pointer;
}

.profile_info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 60rem;
}

.profile-top {
  display: flex;
  justify-content: space-between;
}

.profile-name {
  font-size: 1.8rem;
  line-height: 1.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.profile-name svg {
  width: 1.6rem;
  height: 1.6rem;
}

.profile-location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.933rem;
  font-size: 1.2rem;
  line-height: 150%;
}

.profile-location svg {
  width: 1.267rem;
  height: 1.267rem;
}

.profile-center {
  font-size: 1.4rem;
  line-height: 150%;
  max-width: 58.3rem;
}

.profile-bottom {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.profile-bottom span {
  width: 13rem;
}

.main-button {
  background: #0275b1;
  border: 0.1rem solid #0275b1;
  box-sizing: border-box;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  line-height: 1.1rem;
  text-transform: uppercase;
  color: #ffffff;
  padding: 1.1rem 2rem 1rem 2rem;
  font-family: inherit;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.side-button {
  background: #ffffff;
  border: 0.1rem solid #0275b1;
  box-sizing: border-box;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  line-height: 1.1rem;
  text-transform: uppercase;
  color: #0275b1;
  padding: 1.1rem 2rem 1rem 2rem;
  font-family: inherit;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
  
  ```
