import React from "react";
import { useNavigate } from "react-router-dom";

function Item(props) {
  let navigate = useNavigate();
  const clickHandler = (id) => {
    console.log(id);
    navigate(`/order/${id}`)

  };
  return (
    <div className="item" onClick={clickHandler.bind(this, props.id)}>
      <div className="item-img">
        <img src={props.img} />
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
