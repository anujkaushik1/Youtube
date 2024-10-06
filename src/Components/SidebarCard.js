import React from "react";

const SidebarCard = ({ img, name, onClick = () => {} }) => {
  return (
    <div className="flex cursor-pointer" onClick={(e) => onClick(e)}>
      <h1>{name}</h1>
      {!!img && <img />}
    </div>
  );
};

export default SidebarCard;
