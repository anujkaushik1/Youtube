import React from "react";
import SidebarClient from "./SidebarClient";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarItems = [] }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const navigate = useNavigate();

  const sidebarDefaultData = [
    {
      title: "",
      items: [
        {
          name: "Home",
          img: "",
          onClick: () => {
            navigate('/')
          },
        },
        { name: "Shorts", img: "" },
        { name: "Subscriptions", img: "" },
        { name: "Youtube Music", img: "" },
      ],
    },

    {
      title: "You →",
      items: [
        { name: "Your Channel", img: "" },
        { name: "History", img: "" },
        { name: "Playlists", img: "" },
        { name: "Your Videos", img: "" },
      ],
    },
    {
      title: "Explore",
      items: [
        { name: "Trending", img: "" },
        { name: "Shopping", img: "" },
        { name: "Music", img: "" },
        { name: "Films", img: "" },
        { name: "Gaming", img: "" },
      ],
    },
  ];

  const sidebarData =
    sidebarItems.length > 0 ? sidebarItems : sidebarDefaultData;

  return (
    <div>{isMenuOpen && <SidebarClient sidebarItems={sidebarData} />}</div>
  );
};

export default Sidebar;
