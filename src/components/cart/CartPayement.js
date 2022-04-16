import React from "react";

function CartPayement() {
  return (
    <div className="cartPayment">
      <div className="cartpayment-column cartpayment-columnOne">
      <div className="cartpayment-columnOne_columnOne">
      <div>free</div>
      <div>express 14$</div>
      </div>
      <div>delivery date: 24March, 2022</div>
      </div>
      <div className=" cartpayment-column cartpayment-columnTwo">
        <input type="text" placeholder="code" />
        <button>apply</button>
      </div>
      <div className="cartpayment-column cartpayment-columnThree">
        <div className="cartpayment-columnThree_columnOne">
          <div>SUBTOTAL:80$</div>
          <div className="cartpayment-columnThree_columnOne_details">
            <div>
              <h3>discount</h3>
              <h4>5$</h4>
            </div>
            <div>
              <h3>delivery</h3>
              <h4>0$</h4>
            </div>
            <div>
              <h3>tax</h3>
              <h4>9$</h4>
            </div>
          </div>
        </div>
        <div className="cartpayment-columnThree_columnTwo">
          <h3>total</h3>
          <h4>89$</h4>
        </div>
      </div>
      <div className="cartpayment-column cartpayment-columnFour">
        <button >proceed to checkout</button>
        <button>continue shopping</button>
      </div>
    </div>
  );
}

export default CartPayement;
