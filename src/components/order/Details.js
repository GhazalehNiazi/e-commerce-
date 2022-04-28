import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../redux/contacts/actionType";
import { useSelector } from "react-redux";
import Color from "./Color";
import Size from "./Size";
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
        <Color colors={colors}/>
        
      </div>
      <div>
        <div>size</div>
        <Size className='detail-size' sizes={size}/>
        
      </div>
      <button onClick={clickHandler} >Add To Bag</button>
    </div>
  );
}

export default Details;
