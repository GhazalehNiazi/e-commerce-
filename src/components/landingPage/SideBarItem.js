import React from "react";

function SideBarItem({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>
        <img /> <a href={item[1]}>{item[0]}</a>
        </li>
      ))}
    </ul>
  );
}

export default SideBarItem;
