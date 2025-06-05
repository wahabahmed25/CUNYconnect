import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <div className="bg-[#436ac7] text-white py-20 px-4 text-center">
      <h1 className="text-4xl font-extrabold mb-6 leading-tight">
        Connect Across Campuses. <br />
        Empower Your CUNY Experience
      </h1>
      <p className="max-w-2xl mx-auto text-lg mb-10">
        CUNYConnect is a platform for CUNY students to network, access academic resources,
        and engage with campus activities across all CUNY colleges.
      </p>
      <Link
        to="/signup"
        className="bg-[#ffed86] text-black py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LandingHeader;
