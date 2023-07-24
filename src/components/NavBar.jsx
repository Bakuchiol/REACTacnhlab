import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div id='navBar'>
      <h1>Animal Crossing Bugs Mart ?</h1>
      <ul className='navUl'>
        <li><Link to='/'>Bug Market</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
