//used in dashboard and is links to core features of website with short summaries

import ExploreIcon from "../../icons/explore.svg";
import CardOne from "../cards/CardOne";
import financeIconOne from "../../icons/financeIconOne.svg";
import financeIconTwo from "../../icons/financeIconTwo.svg";
import financeIconThree from "../../icons/financeIconThree.svg";
import financeIconFour from "../../icons/financeIconFour.svg";
import exploreIconTwo from "../../icons/exploreIconTwo.svg"
import planeIcon from "../../icons/planeIcon.svg"
import comIconOne from "../../icons/comIconOne.svg"
import comIconTwo from "../../icons/comIconTwo.svg"
import comIconThree from "../../icons/comIconThree.svg"
import academicIconOne from "../../icons/academicOne.svg"
import academicIconTwo from "../../icons/academicTwo.svg"
import academicIconThree from "../../icons/academicThree.svg"
import academicIconFour from "../../icons/academicFour.svg"
import medicalIconOne from "../../icons/medicalOne.svg"
import medicalIconThree from "../../icons/medicalThree.svg"
import toolsIconOne from "../../icons/toolsOne.svg"
import toolsIconThree from "../../icons/toolsThree.svg"
import toolsIconFour from "../../icons/toolsFour.svg"


const SectionTwo = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardOne
          title="Explore CUNY Schools"
          image={[exploreIconTwo, ExploreIcon,planeIcon ]}
          description="Find information on all CUNY campuses. Including programs, activities, and student testimonials."
          link="/explore"
        />
        <CardOne
          title="Finacial & Life Support"
          image={[
            financeIconThree,
            financeIconTwo,
            financeIconOne,
            financeIconFour,
          ]}
          description="Search for scholarships, navigate financial aid, and discover student discounts."
          link="/scholarships"
        />
        <CardOne
          title="CUNY Community"
          image={[ comIconThree, comIconOne, comIconTwo]}
          description="Connect with fellow students, join groups, and participate in campus events."
          link="/study-groups"
        />
        <CardOne
          title="Academic & Career Boost"
          image={[academicIconOne, academicIconTwo, academicIconFour, academicIconThree,]}
          description="Enhance your academic journey with inplanning tools, career services, and mentorship."
          link="/resources"
        />
       
        <CardOne
          title="Student Resources & Tools"
          image={[toolsIconThree, toolsIconOne, toolsIconFour]}
          description="Find class schedules, tutoring, technology services, and helpful guides all in one place."
          link="/resources"
        />
         <CardOne
          title="Health & Wellness"
          image={[medicalIconOne, medicalIconThree]}
          description="Access physical and mental health services, on-campus clinics, and self-care resources."
          link="/resources"
        />
      </div>
    </div>
  );
};
export default SectionTwo;
