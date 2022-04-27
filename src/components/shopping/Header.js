import React from "react";
import { Link } from "react-router-dom";
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
        <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
