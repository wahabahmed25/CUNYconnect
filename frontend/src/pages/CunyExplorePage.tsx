import NavBarThree from "../components/nav bars/NavBarThree";
import { useNavigate } from "react-router-dom";
import CunyCard from "../components/cards/CunyCard";
import { cunyColleges } from "../components/data/CollegeData";
import LayoutOne from "../components/layouts/LayoutOne";
import CollegeSearchBar from "../components/Input Fields/CollegeSearchBar";
import { useState } from "react";
const CUNYExplorePage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredColleges, setFilteredColleges] = useState(cunyColleges);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm)

    const filteredItems = cunyColleges.filter((college) => college.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredColleges(filteredItems);
  };
  const navigate = useNavigate();

  return (
    <LayoutOne>
      <div className="min-h-screen bg-gray-50 sm:px-8 md:px-4 py-6">
        <NavBarThree college="Hunter College" />
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Explore CUNY Colleges
        </h1>
        <CollegeSearchBar 
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder="Type to search"
            className="mb-7 w-1/2"
        />

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.map((college) => (
            <CunyCard
              key={college.slug}
              image={college.image}
              name={college.name}
              location={college.location}
              onClick={() => navigate(`/${college.slug}/about`)}
            />
          ))}
        </div>
      </div>
    </LayoutOne>
  );
};

export default CUNYExplorePage;
