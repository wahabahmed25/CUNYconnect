import NavBarTwo from "../components/nav bars/NavBarTwo";
// import UserProfile from "../components/user profile/UserProfile";
import SectionOne from "../components/dashboard components/SectionOne";
import CardOne from "../components/cards/CardOne";
import ExploreIcon from "../icons/explore.svg";
const DashboardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBarTwo />
      <SectionOne />

      {/* <UserProfile /> */}

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardOne
            title="Explore CUNY Schools"
            image={[ExploreIcon, ExploreIcon, ExploreIcon]}
            description="Find information on all CUNY campuses. Including programs, activities, and student testimonials."
            link="/explore"
          />
          <CardOne
            title="Finacial & Life Support"
            image={[]}
            description="Search for scholarships, navigate financial aid, and discover student discounts."
            link="/scholarships"
          />
          <CardOne
            title="CUNY Community"
            image={[]}
            description="Connect with fellow students, join groups, and participate in campus events."
            link="/study-groups"
          />
          <CardOne
            title="Academic & Career Boost"
            image={[]}
            description="Enhance your academic journey with inplanning tools, career services, and mentorship."
            link="/resources"
          />
          <CardOne
            title="Academic & Career Boost"
            image={[]}
            description="Enhance your academic journey with inplanning tools, career services, and mentorship."
            link="/resources"
          />
          <CardOne
            title="Academic & Career Boost"
            image={[]}
            description="Enhance your academic journey with inplanning tools, career services, and mentorship."
            link="/resources"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
