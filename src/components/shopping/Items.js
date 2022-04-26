import React, { useEffect } from "react";
import Item from "./Item";
import itemsArray from "./itemsArray";
import { sofa } from "../data/items";
import { lamp } from "../data/items";
import { desk } from "../data/items";
import { useSelector } from "react-redux";

function Items() {
  console.log("hi");

  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  

  const items = products?.map((item) => (
    <Item
      id={item.id}
      key={item.id}
      name={item.name}
      genre={item.genre}
      price={item.price}
      discount={item.discount}
      available={item.available}
      img={item.img}
    ></Item>
  ));
  return <div className="shoppingMainContent-container">{items}</div>;
}

export default Items;
