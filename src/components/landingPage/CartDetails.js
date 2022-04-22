import React from "react";

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
        <button>checkout</button>
      </div>
    </div>
  );
}

export default CartDetails;
