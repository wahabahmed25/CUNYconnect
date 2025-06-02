//card component used in dashboard to display website categories
import type React from "react";
import { Link } from "react-router-dom";

interface CardProp {
  title: string;
  description: string;
  image?: (React.ReactNode | string)[];
  link: string;
}

//text-[#1e3a8a]
const CardOne = ({ title, description, image, link }: CardProp) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full m-4 max-w-md hover:scale-[1.02] transition-transform duration-200">
      <h1 className="text-xl font-bold text-[#1e3a8a] mb-2">{title}</h1>

      {image && (
        <div className="flex gap-3 mb-3">
          {image.map((img, index) =>
            typeof img === "string" ? (
              <img key={index} src={img} alt="icon" className="w-8 h-8" />
            ) : (
              <div key={index} className="text-2xl text-[#1e3a8a]">
                {img}
              </div>
            )
          )}
        </div>
      )}

      <p className="text-gray-700 mb-4">{description}</p>

      <Link
        to={link}
        className="text-sm font-semibold text-blue-600 hover:underline"
      >
        Learn more
      </Link>
    </div>
  );
};

export default CardOne;
