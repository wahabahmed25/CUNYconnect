import { useState } from "react";
import { Link } from "react-router-dom";

interface PropType {
  college: string;
}

const NavBarThree = ({ college }: PropType) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-[#0033A0] text-white w-64 h-screen p-4">
      <h1 className="text-xl font-bold mb-6">{college}</h1>
      <nav>
        <ul className="space-y-4">
          {/* School Overview */}
          <li>
            <button
              className="w-full text-left font-medium hover:underline"
              onClick={() => toggleSection("overview")}
            >
              School Overview
            </button>
            {openSection === "overview" && (
              <ul className="pl-4 mt-2 space-y-1 text-sm">
                <li><Link to={`/${college.toLowerCase()}/about`}>About {college}</Link></li>
                <li><Link to={`/${college.toLowerCase()}/departments`}>Departments</Link></li>
                <li><Link to={`/${college.toLowerCase()}/admissions`}>Admissions</Link></li>
              </ul>
            )}
          </li>

          {/* Academic Tools */}
          <li>
            <button
              className="w-full text-left font-medium hover:underline"
              onClick={() => toggleSection("tools")}
            >
              Academic Tools
            </button>
            {openSection === "tools" && (
              <ul className="pl-4 mt-2 space-y-1 text-sm">
                <li><Link to="/blackboard">Blackboard</Link></li>
                <li><Link to="/degreeworks">DegreeWorks</Link></li>
                <li><Link to="/cunyfirst">CUNYfirst</Link></li>
              </ul>
            )}
          </li>

          {/* Support & Resources */}
          <li>
            <button
              className="w-full text-left font-medium hover:underline"
              onClick={() => toggleSection("support")}
            >
              Support & Resources
            </button>
            {openSection === "support" && (
              <ul className="pl-4 mt-2 space-y-1 text-sm">
                <li><Link to="/tech-support">Tech Support</Link></li>
                <li><Link to="/counseling">Counseling</Link></li>
                <li><Link to="/library">Library</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarThree;
