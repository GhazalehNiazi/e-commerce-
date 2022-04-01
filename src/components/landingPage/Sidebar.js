import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sidebar(props) {
  return (
    <div className={props.className}>
      <div className="landingpage-sidebar__menu">
        <h1>MABELINO.</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <img /> <a href="#">Favorite</a>
          </li>
          <li>
            <img /> <a href="#">Balance</a>
          </li>
          <li>
            <img /> <a href="#">Chat</a>
          </li>
          <li>
            <img /> <a href="#">Setting</a>
          </li>
        </ul>
      </div>
      <div>be premium</div>
    </div>
  );
}

export default Sidebar;
