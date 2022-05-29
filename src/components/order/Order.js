import React from "react";
import Header from "../shopping/Header";
import Details from "./Details";
import Image from "./Image";
import { useParams } from "react-router-dom";
import { desk } from "../data/items";
import { useSelector } from "react-redux";
import { useState } from "react";
function Order() {
  let params = useParams();
  let id = params.productId;
  console.log(id);

  const [AddedToCart, SetAddedToCart] = useState(false);

  const selector = useSelector((state) => state.allProducts.products);
  console.log(selector);

  const product = selector.find((item) => item.id == id);
  console.log(product);

  return (
    <div className="order">
      <Header />
      <div className="mainContentOrder">
        <Image img={product.img} />
        <Details
          product={product}
          name={product.name}
          price={product.price}
          colors={product.colors}
          size={product.size}
          SetAddedToCart={SetAddedToCart}
          AddedToCart={AddedToCart}
        />
      </div>
      {AddedToCart && <div className="addedToCart">added to cart</div>}
    </div>
  );
}

export default Order;
