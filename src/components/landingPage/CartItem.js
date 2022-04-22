const CartItem = ({ img, name, price, className }) => {
    return (
      <div className={className}>
      <div>
      <img src={img} />
      </div>
      <div className={`${className}-detail`}>
      <h5>{name}</h5>
      <h4>${price}</h4>
      </div>
      <div>
      <div>+</div>
      <div>1</div>
      <div>-</div>
      </div>
      </div>
      );
    };

    export default CartItem