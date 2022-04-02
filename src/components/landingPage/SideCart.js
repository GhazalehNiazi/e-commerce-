import React from "react";
import image from "../../assets/chair.jpg";
function SideCart(props) {
  const onCloseButton = () => {
      console.log('closed');
      props.onClose();

  };
  return (
    <div className="sideCart">
      <button onClick={onCloseButton} className='sideCart-cartButton '>close</button>
      <div className="sideCart-cart__items">
        <div className="sideCart-cart__item">
          <div>
            <img src={image} />
          </div>
          <div className="sideCart-cart__item-detail">
            <h5>classic chair</h5>
            <h4>$42</h4>
          </div>
          <div>
            <div>+</div>
            <div>1</div>
            <div>-</div>
          </div>
        </div>
        <div className="sideCart-cart__item">
          <div>
            <img src={image} />
          </div>
          <div className="sideCart-cart__item-detail">
            <h5>classic chair</h5>
            <h4>$42</h4>
          </div>
          <div>
            <div>+</div>
            <div>1</div>
            <div>-</div>
          </div>
        </div>
        <div className="sideCart-cart__item">
          <div>
            <img src={image} />
          </div>
          <div className="sideCart-cart__item-detail">
            <h5>classic chair</h5>
            <h4>$42</h4>
          </div>
          <div>
            <div>+</div>
            <div>1</div>
            <div>-</div>
          </div>
        </div>
        <div className="sideCart-cart__item">
          <div>
            <img src={image} />
          </div>
          <div className="sideCart-cart__item-detail">
            <h5>classic chair</h5>
            <h4>$42</h4>
          </div>
          <div>
            <div>+</div>
            <div>1</div>
            <div>-</div>
          </div>
        </div>
      </div>

      <div className="sideCart-cart__details">
        <div>
          <div className="sideCart-cart__details-item">
            <div>sub total</div>
            <div>$225</div>
          </div>
          <div className="sideCart-cart__details-item">
            <div>delivery</div>
            <div>$72</div>
          </div>
        </div>

        <div className="sideCart-cart__details-item">
          <div>total</div>
          <div>$72</div>
        </div>
        <button>checkout</button>
      </div>
    </div>
  );
}

export default SideCart;
