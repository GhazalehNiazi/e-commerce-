import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
function CartItems() {
  const selector = useSelector((state) => state.cart.cart);
  console.log(selector);

  return (
    <div className="cartItems">
      {selector.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          number={item.number}
          stock={item.stock}
        />
      ))}
    </div>
  );
}

export default CartItems;
