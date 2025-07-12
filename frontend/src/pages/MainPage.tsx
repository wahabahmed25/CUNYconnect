//components of main page of user, where everything is located such as main dashboard, messages, events etc
// MainPage.tsx
import LayoutOne from "../components/layouts/LayoutOne";
import InfoCard from "../components/cards/InfoCard";
import PortalTitle from "../components/CUNY-portal/PortalTitle";
import ResourcesCard from "../components/cards/ResourcesCard";
import PostField from "../components/Social/CreatePost";
import DisplayPost from "../components/Social/DisplayPost";

const MainPage = () => {
  return (
    <LayoutOne>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          <PortalTitle />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <InfoCard title="Upcoming classes" content="No classes Scheduled" date="" />
            <InfoCard title="Upcoming Events" content="Career Fair" date="Jun 10, 2026" />
            <InfoCard title="Tasks" content="CUNYConnect Dashboard" date="Due: Tomorrow" />
            <InfoCard title="Appointment" content="Room 220, Science Building" date="Thu: 1:00 PM - 2:30 PM" />
          </div>

          <div className="mt-10">
            <h1 className="text-xl font-semibold mb-4">Suggested Resources</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ResourcesCard resource="Financial Aid" icon="" />
              <ResourcesCard resource="Therapy" icon="" />
              <ResourcesCard resource="MTA & Rent Help" icon="" />
              <ResourcesCard resource="Scholarships" icon="" />
              <ResourcesCard resource="Tutoring" icon="" />
            </div>
          </div>
        </div>

        {/* Right Section: Post field and posts */}
        <div className="w-full lg:w-1/3">
          <PostField />
          <div className="mt-3">
            <DisplayPost />
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export default MainPage;
