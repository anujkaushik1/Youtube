import React from "react";
import SidebarCard from "./SidebarCard";

const SidebarClient = ({ sidebarItems = [] }) => {
  return (
    <div className="font-sans p-2 w-44 bg-gray-100 shadow-lg min-h-[88vh] flex flex-col justify-center">
      {sidebarItems.map((data, idx) => (
        <>
          <h1 className="font-semibold text-md py-1">{data?.title}</h1>
          {data?.items?.map((item) => (
            <SidebarCard img={item?.img} name={item?.name} />
          ))}
          {idx != sidebarItems.length - 1 && (
            <div className="h-[1px] w-full bg-gray-400 my-2"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default SidebarClient;
