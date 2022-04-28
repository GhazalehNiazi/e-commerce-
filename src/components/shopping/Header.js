import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <ul className="header-items">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <a>catalog</a>
        </li>
        <li>
          <a>Wish List</a>
        </li>
        <li>
          <input type="text" placeholder="search" />
        </li>
        <li>
          <Link to='/account'>account</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
