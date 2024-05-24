import React from "react";
import IconComponent from "../container/IconComponent";

const ActivityCard = ({ icon, name, role, description, time }: any) => {
  return (
    <div className="my-7 flex">
      <IconComponent
        icon={icon}
        className="h-[60px] w-[60px] bg-gray-800 rounded-full p-1 mr-2"
      />
      <div>
        <p className="text-xs font-semibold">
          {name} <span className="text-blue-500 text-[10px]">[ {role} ]</span>
        </p>
        <p className="text-xs py-2">{description}</p>
        <p style={{ fontSize: "10px" }}>{time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
