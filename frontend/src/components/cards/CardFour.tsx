//used in landing page reviews

import type React from "react";
import defaultPfpIcon from "../../icons/bluepfpIcon.svg";

interface CardProp {
  image?: React.ReactNode | string;
  name: string;
  message: string;
}

const CardFour = ({ message, image, name }: CardProp) => {
  const avatar = image || defaultPfpIcon;

  return (
    <div className="flex items-start gap-4 bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition duration-200 max-w-md w-full">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        {typeof avatar === "string" ? (
          <img src={avatar} alt="Profile" className="w-12 h-12 rounded-full" />
        ) : (
          avatar
        )}
      </div>

      {/* Name and Message */}
      <div className="flex flex-col">
        <h1 className="font-bold text-base text-[#36639e]">
          {name?.trim() || "ANONYMOUS"}
        </h1>
        <p className="text-gray-800 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default CardFour;
