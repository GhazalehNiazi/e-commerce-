import React from 'react'

function Details(props) {
  return (
    <div className='details'> 
    <div>
    <div>{props.name}</div>
    <div>{props.price}</div>
    </div>
<div>
<div>color</div>
<div>collorr</div>
</div>
<div>
<div>size</div>
<div>sizeeeee</div>
</div>
<button>Add To Bag</button>
</div>
  )
}

export default Details