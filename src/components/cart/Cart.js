import React from 'react'
import CartItems from './CartItems'
import CartPayement from './CartPayement'

function Cart() {
  return (
    <div className='cart'>
    <CartItems/>
    <CartPayement/>
    </div>
  )
}

export default Cart