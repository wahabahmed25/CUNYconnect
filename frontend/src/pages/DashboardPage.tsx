import NavBarTwo from "../components/nav bars/NavBarTwo";
// import UserProfile from "../components/user profile/UserProfile";
import SectionOne from "../components/dashboard components/SectionOne";
import SectionTwo from "../components/dashboard components/SectionTwo";

const DashboardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBarTwo />
      <SectionOne />
      <SectionTwo />

      
    </div>
  );
};

export default DashboardPage;
