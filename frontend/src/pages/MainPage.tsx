//components of main page of user, where everything is located such as main dashboard, messages, events etc
// MainPage.tsx
import NavBarThree from "../components/nav bars/NavBarThree";
import InfoCard from "../components/cards/InfoCard";
import PortalTitle from "../components/CUNY-portal/PortalTitle";
import ResourcesCard from "../components/cards/ResourcesCard";
import PostField from "../components/Social/PostField";
const MainPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <NavBarThree college="Hunter College" />

      {/* Main Content */}
      <main className="flex-1 ml-5 p-8 flex">
        <div className="w-full sm:w-1/2 max-w-4xl">
          {/* title */}
          <PortalTitle />

          {/* planning cards --> events, classes, tasks, appoitments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoCard
              title="Upcoming classes"
              content="No classes Scheduled"
              date=""
            />
            <InfoCard
              title="Upcoming Events"
              content="Career Fair"
              date="Jun 10, 2026"
            />
            <InfoCard
              title="Tasks"
              content="CUNYConnect Dashboard"
              date="Due: Tomorrow"
            />
            <InfoCard
              title="Appointment"
              content="Room 220, Science Building"
              date="Thu: 1:00 PM - 2:30 PM"
            />
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
        {/* Right Section: Social Media / Post Field */}
        <div className="w-full lg:w-1/3 right-5 top-5 ml-5">
          <PostField />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
