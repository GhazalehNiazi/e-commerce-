import React from "react";
import { Link } from "react-router-dom";
function CartDetails({ className, details }) {
  return (
    <div className={className}>
      <div>
        {details.map((item) => (
          <div className={`${className}-item`}>
            <div>{item[0]}</div>
            <div>${item[1]}</div>
          </div>
        ))}
        <button><Link to='/cart'>checkout</Link></button>
      </div>
    </div>
  );
}

export default CartDetails;
