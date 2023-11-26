import React from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData';
import './header.css';

function Header() {
  return (
    <>
      <header>
         
        <a href="#" className='logo'>
        cinema
          </a>
      <ul className="nav">
      {navListData && navListData.map(nav => (
  <NavListItem key={nav.id} nav={nav} />
))}

      </ul>
      </header>
    </>
  )
}

export default Header
