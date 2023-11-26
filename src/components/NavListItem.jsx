/* eslint-disable react/prop-types */
import React from 'react'
import './navlistListItem.css'

function NavListItem({ nav}) {
  return (
    <>
     <li>
      <a href={nav.link}>{nav.name}</a>
      </li> 
    </>
  )
}

export default NavListItem
