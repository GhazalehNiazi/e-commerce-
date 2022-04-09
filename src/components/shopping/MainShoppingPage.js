import React from 'react'
import Content from './Content'
import FilterBar from './FilterBar'
import Header from './Header'
import SubHeader from './SubHeader'

function MainShoppingPage() {
  return (
    <div className='shopping'>
    <FilterBar/>
    <div className='shopping-right'>
    <Header/>
  {/*  <SubHeader/>*/}
    <Content/>
    </div>
    </div>
  )
}

export default MainShoppingPage