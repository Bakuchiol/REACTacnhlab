import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  const images =
    {
      bugs: 'https://dodo.ac/np/images/thumb/8/8e/Bug_NH_Icon.png/120px-Bug_NH_Icon.png',
      fish: 'https://dodo.ac/np/images/thumb/3/3c/Fish_NH_Icon.png/120px-Fish_NH_Icon.png',
      sea: 'https://dodo.ac/np/images/thumb/f/ff/Sea_Creature_NH_Icon.png/120px-Sea_Creature_NH_Icon.png'
    }

  return (
    <div id='navBar'>
      <h1 id='title'><Link to='/'>Critterpedia</Link></h1>
      
      <ul className='navUl'>
        <li>
          <Link to='/insect-list'>
            <img src={images.bugs} alt="bug-icon" className='navIcon'/>
          </Link>
        </li>
        <li>
          <Link to='/fish-list'>
            <img src={images.fish} alt="fish-icon" className='navIcon'/>
          </Link>
        </li>
        <li>
          <Link to='/sea-creatures-list'>
            <img src={images.sea} alt="sea-icon" className='navIcon'/>
          </Link>
        </li>
        {/* <li><Link to='/nook-shopping'>Nook Shopping</Link></li> */}
      </ul>
    </div>
  )
}

export default NavBar
