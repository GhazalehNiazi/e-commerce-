import React from 'react'
import Content from './Content'
import FilterBar from './FilterBar'
import Header from './Header'
import SubHeader from './SubHeader'
import RightSide from '../UI/RightSide'

function MainShoppingPage() {
  return (
    <div className='shopping'>
    <FilterBar/>
    <RightSide>
    <div className='shopping-right'>
    <Header/>
    {/*  <SubHeader/>*/}
    <Content/>
    </div>
    </RightSide>
    </div>
  )
}

export default MainShoppingPage