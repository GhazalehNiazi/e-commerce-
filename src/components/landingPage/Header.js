import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-row--one">
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Journal</a>
          </li>
        </ul>
        <h3>FINEMATTER</h3>
        <ul>
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>WishList</a>
          </li>
        </ul>
      </div>
      <div className="header-row--two">
        <ul>
          <li>
            <a>New in</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Gifts</a>
          </li>
          <li>
            <a>Discounts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
