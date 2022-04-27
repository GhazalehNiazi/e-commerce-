import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Items() {

  const param = useParams();
  const category = param.category;
  console.log(category);

  const products = useSelector((state) => state.allProducts.products);

  const selectedProduct = products.filter((item) => item.genre == category);
  console.log(selectedProduct);

  const items = selectedProduct?.map((item) => (
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
