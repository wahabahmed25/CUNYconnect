import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../../icons/ArrowIcon.svg";
import MenuIcon from "../../icons/MenuIcon.svg";

interface PropType {
  college: string;
}

const NavBarThree = ({ college }: PropType) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({
    title,
    sectionKey,
    links,
  }: {
    title: string;
    sectionKey: string;
    links: { label: string; to: string }[];
  }) => (
    <li>
      <button
        className="flex items-center justify-between w-full text-left font-semibold hover:text-yellow-300 transition-colors cursor-pointer"
        onClick={() => toggleSection(sectionKey)}
      >
        <span>{title}</span>
        <img
          src={ArrowIcon}
          alt="arrow"
          className={`w-4 h-4 transition-transform duration-300 invert ${
            openSections[sectionKey] ? "rotate-90" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
          openSections[sectionKey]
            ? "max-h-96 opacity-100 translate-y-0 mt-2"
            : "max-h-0 opacity-0 -translate-y-1"
        }`}
      >
        <ul
          className={`pl-4 space-y-2 text-sm text-white/90
            transition-opacity duration-400 ease-in-out
            ${openSections[sectionKey] ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            transform origin-top-left
          `}
          style={{
            transitionProperty: "opacity, transform",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {links.map((link) => (
            <li key={link.label} className="transform transition-transform duration-300 ease-out hover:scale-105">
              <Link to={link.to} className="hover:underline block">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden p-4 bg-[#0033A0] text-white flex items-center justify-between">
        <h1 className="text-xl font-bold">{college || "Hunter College"}</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={MenuIcon} alt="menu" className="w-6 h-6 hover:cursor-pointer invert" />
        </button>
      </div>

      {/* Sidebar for medium and up, or slide-in for mobile */}
      <aside
        className={`bg-[#0033A0] text-white w-64 h-screen p-6 shadow-xl fixed md:static z-40 transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        overflow-y-auto
        scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent
        `}
      >
        <h1 className="text-2xl font-extrabold mb-8 tracking-wide border-b border-white/30 pb-2">
          {college || "Hunter College"}
        </h1>
        <nav className="max-h-[85vh]">
          <ul className="space-y-8">
            <Section
              title="School Overview"
              sectionKey="overview"
              links={[
                { label: `About ${college}`, to: `/${college.toLowerCase()}/about` },
                { label: "Departments", to: `/${college.toLowerCase()}/departments` },
                { label: "Admissions", to: `/${college.toLowerCase()}/admissions` },
                { label: "Campus Map", to: `/${college.toLowerCase()}/campus-map` },
                { label: "Events Calendar", to: `/${college.toLowerCase()}/events` },
              ]}
            />
            <Section
              title="Academic Tools"
              sectionKey="tools"
              links={[
                { label: "Blackboard", to: "/blackboard" },
                { label: "DegreeWorks", to: "/degreeworks" },
                { label: "CUNYfirst", to: "/cunyfirst" },
                { label: "Tutoring Center", to: "/tutoring" },
                { label: "Course Catalog", to: "/course-catalog" },
              ]}
            />
            <Section
              title="Support & Resources"
              sectionKey="support"
              links={[
                { label: "Tech Support", to: "/tech-support" },
                { label: "Counseling Services", to: "/counseling" },
                { label: "Library", to: "/library" },
                { label: "Career Center", to: "/career-center" },
                { label: "Disability Services", to: "/disability" },
              ]}
            />
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default NavBarThree;
