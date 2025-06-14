//header section for dashboard

import { useUserData } from "../user context/useUserData";
import { Link } from "react-router-dom";

const SectionOne = () => {
  const { userData, loading } = useUserData();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center bg-[#4C77B5] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
        Welcome to CUNYconnect {userData?.name?.split(" ")[0]?.toUpperCase()}!
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 max-w-6xl w-full">
        
        <Link
          to="/explore"
          className="flex-1 lg:flex-none w-full lg:w-auto text-center bg-white text-[#1e3a8a] font-semibold px-6 py-4 rounded-xl shadow-md hover:scale-[1.02] transition"
        >
          Explore CUNY Schools
        </Link>
        <Link
          to="/explore"
          className="flex-1 lg:flex-none w-full lg:w-auto text-center bg-white text-[#1e3a8a] font-semibold px-6 py-4 rounded-xl shadow-md hover:scale-[1.02] transition"
        >
          Find Scholarships
        </Link>
        <Link
          to="/explore"
          className="flex-1 lg:flex-none w-full lg:w-auto text-center bg-white text-[#1e3a8a] font-semibold px-6 py-4 rounded-xl shadow-md hover:scale-[1.02] transition"
        >
          Join a Study Group
        </Link>
        <Link
          to="/explore"
          className="flex-1 lg:flex-none w-full lg:w-auto text-center bg-white text-[#1e3a8a] font-semibold px-6 py-4 rounded-xl shadow-md hover:scale-[1.02] transition"
        >
          Access Student Resources
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
