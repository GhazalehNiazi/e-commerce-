import React from 'react'
import Header from '../shopping/Header'
import CartItems from './CartItems'
import CartPayement from './CartPayement'

function Cart() {
  return (
    <>
    <Header/>
    <div className='cart'>
    <CartItems/>
    <CartPayement/>
    </div>
    </>
  )
}

export default Cart