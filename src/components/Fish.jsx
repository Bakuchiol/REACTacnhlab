import React from 'react'

function Fish({fish}) {
  return (
    <div id='fishCard'>
      <img src={fish?.icon_uri} alt="fish" />
      <p className='fish'>{fish?.name['name-USen']}</p>
    </div>
  )
}

export default Fish
