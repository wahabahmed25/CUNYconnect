//all components of dashboard which gives a breif overview or "links" to get started

import NavBarTwo from "../components/nav bars/NavBarTwo";
// import UserProfile from "../components/user profile/UserProfile";
import SectionOne from "../components/dashboard components/SectionOne";
import SectionTwo from "../components/dashboard components/SectionTwo";
import PersonalPageButton from "../components/dashboard components/MainPageButton";
const DashboardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBarTwo />
      <SectionOne />
      <PersonalPageButton />
      <SectionTwo />

      
    </div>
  );
};

export default DashboardPage;
