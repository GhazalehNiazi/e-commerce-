import React from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../redux/contacts/actionType";
import { useSelector } from "react-redux";
function Details({ colors, name, price, size, product }) {
  
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const clickHandler = () => {
    dispatch({ type: actionTypes.ADD_PRODUCT, payload: product });
    console.log(selector);
  };

  return (
    <div className="details">
      <div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <div>
        <div>color</div>
        <div>
          {colors.map((color) => (
            <span>{color}</span>
          ))}
        </div>
      </div>
      <div>
        <div>size</div>
        <div>{size}</div>
      </div>
      <button onClick={clickHandler}>Add To Bag</button>
    </div>
  );
}

export default Details;
