import React from "react";
import Items from "./Items";

function Item(props) {
  return (
    <div className="item">
      <div className="item-img">
        <img src={props.img}/>
      </div>
     
      <div>
        <div>{props.name}</div>
        <div>{props.genre}</div>
        <div>{props.price}</div>
        <div>
          <div>{props.before}</div>
          <div>-{props.discount}% OFF</div>
        </div>
        <div>{props.available} available</div>
  </div>
    </div>
  );
}

export default Item;
