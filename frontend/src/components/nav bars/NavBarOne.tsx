//nav bar for signup and login page
import { Link } from "react-router-dom";
const NavBarOne = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white w-full">
      <Link to = "/landing" className="text-3xl cursor-pointer font-bold text-[#275392]">
        CUNYconnect
      </Link>
      <nav>
        <ul className="flex gap-6 text-gray-800 font-medium">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">About</Link>
          </li>
          <li>
            <Link to="/home">Help</Link>
          </li>
          <li>
            <Link to="/home">Login</Link>
          </li>
        </ul>
  
      </nav>
    </div>
  );
};

export default NavBarOne;
