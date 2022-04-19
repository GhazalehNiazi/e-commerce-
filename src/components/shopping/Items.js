import React from 'react'
import Item from './Item';
import itemsArray from './itemsArray';
import { sofa } from '../data/items';
function Items() {
   const items =  sofa.map((item)=><Item name={item.name} genre={item.genre} price={item.price} discount={item.discount} available={item.available} img={item.img}></Item>)
  return (
    <div className="shoppingMainContent-container">
    {items}
    </div>
  )
}

export default Items