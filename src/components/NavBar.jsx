import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div id='navBar'>
      <h1>Nook's Cranny</h1>
      <ul className='navUl'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/fish-list'>Fish</Link></li>
        <li><Link to='/nook-shopping'>Nook Shopping</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
