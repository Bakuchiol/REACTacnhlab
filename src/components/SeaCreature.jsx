import React from 'react'
// attempt mouseOver
// import { useState, useEffect } from 'react'

function SeaCreature({sea}) {
  // attempt mouseover
  // const [hover, setHover] = useState('#f8eebc')

  // // forUseEffect
  // const hoverName = () => {
  //   setHover('#000')
  // }
  // hoverName()

  // useEffect(() => {
  //   let hoverName = document.querySelector('.seaCreature');
  //   hoverName.style.color = hover
  // })


  return (
    <div id='seaComp'>
        <div id='testWrap'>
          <p className='seaCreature'>{sea?.name['name-USen']}</p>
        </div>
        <img src={sea?.icon_uri} alt="sea-creature" />
      </div>      
  )
}

export default SeaCreature
