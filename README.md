# designtocode-linkedin
It is coded pixel perfect, responsive. Completed in 3 days with React and CSS Modules for a case study provided from Baykar Technologies.
Data passed through components with props.

Design File : https://www.figma.com/file/IeqgNTYTFMemBSarQnAN8x/LinkedIn-Redesign-Case?node-id=0%3A1

Live Link: https://ahmetgoze.github.io/designtocode-linkedin/


Source Directory Tree:

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



Data objects to create the content dynamically:

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
