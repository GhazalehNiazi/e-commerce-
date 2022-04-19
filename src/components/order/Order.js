import React from "react";
import Header from "../shopping/Header";
import Details from "./Details";
import Image from "./Image";
import { useParams } from "react-router-dom";
import { desk } from "../data/items";

function Order() {
  let params = useParams();
  let id = params.productId;
  console.log(id);

  const index =desk.findIndex((item)=>item.id==id);
const product = desk[index]
  console.log(index);

  return (
    <div className="order">
      <Header />
      <div className="mainContentOrder">
        <Image img={product.img}/>
        <Details name={product.name} price={product.price}/>
      </div>
    </div>
  );
}

export default Order;
