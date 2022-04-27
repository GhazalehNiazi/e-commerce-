import React, { useState } from "react";
import main from "../../assets/mainImage.jpg";
import chair from "../../assets/chair.jpg";
import lamp from "../../assets/lamp.jpg";
import amchair from "../../assets/amchair.jpg";
import table from "../../assets/table.jpg";
import sofa from "../../assets/sofa.jpg";
import SideCart from "./SideCart";
import SubPart from "./SubPart";
import MainPart from "./MainPart";

function MainContent() {
  const [showCart, setShowCart] = useState(false);
  const [showCartClassName, setShowCartClassName] = useState("full");

  const chairArray = [chair, chair, chair, chair];
  const mainArray = [
    { src: chair, className: "maincontent-images__img1", category:'chair'},
    { src: lamp, className: "maincontent-images__img2" , category:'lamp'},
    { src: amchair, className: "maincontent-images__img3", category:'ampchair' },
    { src: table, className: "maincontent-images__img4", category:'desk' },
    { src: sofa, className: "maincontent-images__img5" , category:'sofa'},
  ];

  const cartCloseHandler = () => {
    setShowCart(false);
    setShowCartClassName("full");
  };
  const cartOpenHandler = () => {
    setShowCart(true);
    setShowCartClassName("");
  };

  return (
    <div className={`maincontent ${showCartClassName}`}>
      <div>
        <MainPart
          title="Best Furniture"
          subTitle="For Your House"
          mainItem={main}
          items={mainArray}
          className="maincontent"
        />
        <SubPart
          items={chairArray}
          className="maincontent-hotseller"
          title="hot seller"
        />
      </div>

      {!showCart && (
        <button className="maincontent-cartButton" onClick={cartOpenHandler}>
          cart
        </button>
      )}
      {showCart && <SideCart onClose={cartCloseHandler} />}
    </div>
  );
}

export default MainContent;
