import React from "react";
import sidebarone from "../../Images/sidebar/sidebarone.png";
import sidebartwo from "../../Images/sidebar/sidebartwo.png";
import sidebarthree from "../../Images/sidebar/sidebarthree.png";
import sidebarfour from "../../Images/sidebar/sidebarfour.png";
import sidebarfive from "../../Images/sidebar/sidebarfive.png";
import sidebarsix from "../../Images/sidebar/sidebarsix.png";
import sidebarseven from "../../Images/sidebar/sidebarseven.png";
import sidebareight from "../../Images/sidebar/sidebareight.png";
import sidebarnine from "../../Images/sidebar/sidebarnine.png";

const SideBar = () => {
  const sidebarImages = [
    sidebarone,
    sidebartwo,
    sidebarthree,
    sidebarfour,
    sidebarfive,
    sidebarsix,
    sidebarseven,
    sidebareight,
    sidebarnine,
  ];

  return (
    <div
      className="bg-white flex flex-col items-center gap-10 py-8  shadow-2xl"
      style={{
        borderTopRightRadius: "35px",
        width: "6%",
      }}
    >
      {sidebarImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`sidebar ${index + 1}`}
          className="h-7 bg-transparent"
        />
      ))}
    </div>
  );
};

export default SideBar;
