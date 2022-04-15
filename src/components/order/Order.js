import React from 'react'
import Header from '../shopping/Header'
import Details from './Details'
import Image from './Image'

function Order() {
  return (
    <div className='order'>
    <Header/>
    <div className='mainContentOrder'>
    <Image/>
    <Details/>
    </div>
    </div>
    
  )
}

export default Order