import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarItem from "./SideBarItem";
function Sidebar(props) {
  const items = [
    ["Home", "#"],
    ["Favorite", "#"],
    ["Balance", "#"],
    ["Chat", "#"],
    ["Chat", "#"],
  ];
  return (
    <div className={props.className}>

      <div className="landingpage-sidebar__menu">
        <h1>MABELINO.</h1>
        <SideBarItem items={items} />
      </div>

      <div>be premium</div>
      
    </div>
  );
}

export default Sidebar;
