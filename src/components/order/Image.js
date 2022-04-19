import React from 'react'

function Image(props) {
  return (
    <div className='orderImageContainer'>
    <img src={props.img}/>
    </div>
  )
}

export default Image