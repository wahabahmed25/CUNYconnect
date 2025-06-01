import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for icons

const NavBarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#1F569D] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-2xl cursor-default sm:text-3xl font-bold text-white">CUNYconnect</h1>

        {/* Hamburger Icon (mobile only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white font-medium">
            <li className="hover:underline"><Link to="/explore">Explore Schools</Link></li>
            <li className="hover:underline"><Link to="/financial">Financial Support</Link></li>
            <li className="hover:underline"><Link to="/community">Community</Link></li>
            <li className="hover:underline"><Link to="/academic">Academic & Career</Link></li>
            <li className="hover:underline"><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col  gap-4 text-white font-medium">
            <li className="hover:underline"><Link to="/explore" onClick={toggleMenu}>Explore Schools</Link></li>
            <li className="hover:underline"><Link to="/financial" onClick={toggleMenu}>Financial Support</Link></li>
            <li className="hover:underline"><Link to="/community" onClick={toggleMenu}>Community</Link></li>
            <li className="hover:underline"><Link to="/academic" onClick={toggleMenu}>Academic & Career</Link></li>
            <li className="hover:underline"><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBarTwo;
