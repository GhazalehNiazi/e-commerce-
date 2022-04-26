import React from "react";
import Header from "../shopping/Header";
import Details from "./Details";
import Image from "./Image";
import { useParams } from "react-router-dom";
import { desk } from "../data/items";
import { useSelector } from "react-redux";

function Order() {
  let params = useParams();
  let id = params.productId;
  console.log(id);

  const selector = useSelector((state)=>state.allProducts.products);
  console.log(selector);

const product = selector.find((item)=>item.id == id);
console.log(product);

  return (
    <div className="order">
      <Header />
      <div className="mainContentOrder">
        <Image img={product.img} />
        <Details product={product} name={product.name} price={product.price} colors={product.colors} size={product.size} />
      </div>
    </div>
  );
}

export default Order;
