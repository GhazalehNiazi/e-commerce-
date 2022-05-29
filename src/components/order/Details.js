import React from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../redux/contacts/actionType";
import { useSelector } from "react-redux";
import Color from "./Color";
import Size from "./Size";
function Details({ colors, name, price, size, product ,SetAddedToCart,AddedToCart}) {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  

  const clickHandler = () => {
    dispatch({ type: actionTypes.ADD_PRODUCT, payload: product });
    SetAddedToCart(true);
    console.log(selector);

  };


  return (
    <div className="details">
      <div className="details-firstSection">
        <div className="details-name">{name}</div>
        <div className="details-price">${price}</div>
      </div>
      <div>
        <div className="details-title">color</div>
        <Color colors={colors}/>
        
      </div>
      {size && <div>
        <div className="details-title">size</div>
        <Size className='detail-size' sizes={size}/>
        
      </div>}
      <button onClick={clickHandler} >Add To Bag</button>
    </div>
  );
}

export default Details;
