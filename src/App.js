import ProfilePage from "./pages/ProfilePage";
import user1 from "./assets/user1.png";
import visitor1 from "./assets/visitor1.png";
import visitor2 from "./assets/visitor2.png";
import visitor3 from "./assets/visitor3.png";
import visitor4 from "./assets/visitor4.png";
import visitor5 from "./assets/visitor5.png";
import course1 from "./assets/course1.png";
import course2 from "./assets/course2.png";
import course3 from "./assets/course3.png";

function App() {
  const user = {
    picture: user1,
    name: "Bianca Stan",
    views: 367,
    increased: 15,
    postsViews: 15,
    searchAppereances: 9,
  };

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
  return (
    <div>
      <ProfilePage user={user} visitors={profileVisitors} courses={courses} />
    </div>
  );
}

export default App;