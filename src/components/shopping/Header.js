import React from "react";

function Header() {
  return (
    <div className="header">
  
      <ul  className="header-items">

        <li>
          <a>catalog</a>
        </li>
        <li>
        <a>Wish List</a>
        </li>
        <li>
        <input type="text" placeholder="search"/>
        </li>
        <li>
          <a>account</a>
        </li>
        <li>
        <a>Cart</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
