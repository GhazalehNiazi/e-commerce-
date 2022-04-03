import React from "react";

function FilterBar() {
  return (
    <div className="filterBar"> 
    <div className="header_logo">LOGO LAND</div>
    
      <div className="filterBar-price">
        <h5>Price</h5>
        <div>
          <div>From $500</div>
          <div>Up tp $5000</div>
        </div>
        <input type="range" />
      </div>

      <div>
        <h5>Category</h5>
      </div>

      <div>
        <h5>Material</h5>
      </div>

      <div>
        <h5>Color</h5>
      </div>

      <div>
        <h5>sort By</h5>
      </div>
      <div className="filterBar-apply">
      <button>Apply Filter</button>
      <h5>delete</h5>
      </div>
    </div>
  );
}

export default FilterBar;
