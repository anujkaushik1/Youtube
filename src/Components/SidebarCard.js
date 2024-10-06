import React from "react";

const SidebarCard = ({ img, name }) => {
  return (
    <div className="flex">
      <h1>{name}</h1>
      {!!img && <img />}
    </div>
  );
};

export default SidebarCard;
