import React from "react";
import image from "../../assets/chair.jpg";
import CartDetails from "./CartDetails";
import CartItems from "./CartItems";

const cart = [
  { id: 1, name: "classic chair", price: "42", img: image },
  { id: 1, name: "classic chair", price: "42", img: image },
  { id: 1, name: "classic chair", price: "42", img: image },
  { id: 1, name: "classic chair", price: "42", img: image },
  { id: 1, name: "classic chair", price: "42", img: image },
];
const cartdetail =[['sub total', 225],['delivery', 72],['total', 494]];

function SideCart(props) {
  return (
    <div className="sideCart">
      <button onClick={props.onClose} className="sideCart-cartButton ">
        close
      </button>

      <CartItems className="sideCart-cart__items" items={cart} />
      <CartDetails className='sideCart-cart__details' details= {cartdetail}/>

    </div>
  );
}

export default SideCart;
