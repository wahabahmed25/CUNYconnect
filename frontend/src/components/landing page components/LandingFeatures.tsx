//shows core features of website

import CardTwo from "../cards/CardTwo";
import landingIconOne from "../../icons/landingOne.svg";
import landingIconSix from "../../icons/landingSix.svg";
import landingIconThree from "../../icons/landingThree.svg";
import landingIconFour from "../../icons/landingFour.svg";

const LandingFeatures = () => {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        <CardTwo
          image={landingIconThree}
          title="Student Directory"
          description="Connect with fellow CUNY students"
        />
        <CardTwo
          image={landingIconFour}
          title="Academic Tools"
          description="Organize your classes and assignments"
        />
        <CardTwo
          image={landingIconSix}
          title="Club Discovery"
          description="Find and join student clubs"
        />
        <CardTwo
          image={landingIconOne}
          title="Real-Time Messaging"
          description="Chat with your peers instantly"
        />
      </div>
    </div>
  );
};

export default LandingFeatures;
