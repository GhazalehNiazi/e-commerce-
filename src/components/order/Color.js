import React from 'react'

function Color({colors}) {
    const finalColor = colors.map((color)=>(
        color.includes('#') ?  <span style={{backgroundColor:color}} className='details-color'></span>: <span>{color}</span> ))
  return (
    <div className='detail-color_container'>
   {finalColor}
  </div>
  )
}

export default Color