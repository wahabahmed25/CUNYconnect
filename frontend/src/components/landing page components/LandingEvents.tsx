import CardThree from "../cards/CardThree";

const LandingEvents = () => {
  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-center mb-4">Upcoming Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
        <CardThree
          date="2025-06-10"
          title="Career Fair"
          school="Hunter College"
          description="Explore job and internship opportunities"
        />
        <CardThree
          date="2025-06-12"
          title="Tech Talk"
          school="City College"
          description="Hear from professionals in the tech industry"
        />
        <CardThree
          date="2025-06-15"
          title="CUNY Mixer"
          school="Baruch College"
          description="Network with students from all CUNY campuses"
        />
        <CardThree
          date="2025-06-18"
          title="Portfolio Workshop"
          school="Brooklyn College"
          description="Get help refining your resume and portfolio"
        />
      </div>
    </div>
  );
};

export default LandingEvents;
