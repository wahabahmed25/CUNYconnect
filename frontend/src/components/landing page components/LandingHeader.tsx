//landing page header --> gives short overview of website

import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <div className="bg-[#2e4e9a] text-white py-16 sm:py-20 px-4 sm:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-snug sm:leading-tight">
          Connect Across Campuses. <br />
          Empower Your CUNY Experience
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10">
          CUNYConnect is a platform for CUNY students to network, access academic resources,
          and engage with campus activities across all CUNY colleges.
        </p>
        <Link
          to="/signup"
          className="bg-[#ffed86] text-black py-3 px-6 sm:py-3.5 sm:px-8 text-sm sm:text-base font-semibold rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingHeader;
