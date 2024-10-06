import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainVideoContainer from "./MainVideoContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet/>
      </div>
    

    </div>
  );
};

export default Body;
