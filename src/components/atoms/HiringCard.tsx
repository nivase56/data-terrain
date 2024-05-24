import React from "react";
import IconComponent from "../container/IconComponent";

const HiringCard = ({ icon, name, description, time }: any) => {
  return (
    <div className="my-7 flex items-center">
      <IconComponent
        icon={icon}
        className="h-[60px] w-[60px] bg-gray-800 rounded-full p-1 mr-2"
      />
      <div className="w-[68%]">
        <p className="text-xs font-semibold">{name}</p>
        <p className="text-xs py-2 ">{description}</p>
        <p className="text-xs">Hired by: Stella</p>
      </div>
      <button className="border  rounded border-blue-400  text-blue-500 py-1 px-3 h-8  text-xs">
        Details
      </button>
    </div>
  );
};

export default HiringCard;
