import React from "react";
import CartItem from "./CartItem";


  function CartItems({ className, items }) {
    return (
      <div className={className}>
        {items.map((item)=><CartItem img={item.img} name={item.name} price={item.price} className="sideCart-cart__item"/>)}
      </div>
    );
  }
  
  export default CartItems;
