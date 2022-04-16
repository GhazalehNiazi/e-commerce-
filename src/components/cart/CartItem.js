import React from "react";

function CartItem(props) {
  return (
    <div className="cartItem">
      <div className="cartItem-image">img</div>

      <div className="cartItem-info">
        <div className="cartItem-info_columnOne">
          <div>
            <h1>{props.name}</h1>
            <h4>
              {props.price} | <span className="cartItem-info_columnOne_stock">{props.stock}</span>
            </h4>
          </div>
          <div>
            <h4>{props.price + props.number}</h4>
          </div>
        </div>

        <div className="cartItem-info_columnTwo">
          <div>
            <button>+</button>
            <input type="number" />
            <button>-</button>
          </div>
          <div className="cartItem-info_columnTwo_options">
            <h4>save</h4>
            <h4>delete</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
