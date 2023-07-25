import React from 'react'

function Bug({bug}) {
  return (
    <div>
      <div id='bugCard'>
        <img src={bug?.icon_uri} alt="bugIMG" />
        <p className='bug'>{bug?.name['name-USen']}</p>
      </div>
    </div>
  )
}

export default Bug
