//link to main page of website

import { Link } from "react-router-dom";

const MainPageButton = () => {
  return (
    <div className="flex justify-center items-center mt-6 ">
      <Link
        to="/main"
        className="bg-[#3b5ab1] hover:bg-[#0071BC] text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition duration-300"
      >
        Enter CUNYConnect
      </Link>
    </div>
  );
};

export default MainPageButton;
