import React from "react";
import main from "../../assets/mainImage.jpg";
import chair from "../../assets/chair.jpg";
import lamp from "../../assets/lamp.jpg";
import amchair from "../../assets/amchair.jpg";
import table from "../../assets/table.jpg";
import sofa from "../../assets/sofa.jpg";
import SideCart from "./SideCart";

function MainContent() {
  return (
    <div className="maincontent">
    <div>
    <div className="maincontent-title">
    <h3>Best Forniture</h3>
        <h5>For Your House</h5>
        </div>
      <div className="maincontent-content">
        <div className="maincontent-images__main">
          <img src={main} />
          </div>
        <div className="maincontent-images">
          <img className="maincontent-images__img1" src={chair} />
          <img className="maincontent-images__img2" src={lamp} />
          <img className="maincontent-images__img3" src={amchair} />
          <img className="maincontent-images__img4" src={table} />
          <img className="maincontent-images__img5" src={sofa} />
        </div>
        </div>
        <div className="maincontent-hotseller">
        <div className="maincontent-hotseller__title">
        <h5>Hot Seller</h5>
        <div>search</div>
        </div>
          <img />
          <img />
          <img />
          <img />
        </div>
        </div>
        <SideCart/>
    </div>
  );
}

export default MainContent;
