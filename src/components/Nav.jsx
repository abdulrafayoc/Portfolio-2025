import React from 'react'
import './Nav.css'

import menu from '../assets/menu.png'


const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>
            <h1>Abdul Rafay</h1>
        </div>
        <div className='menu-btn'>
            <img className='menu-i' src={menu} alt='menu'/>
            </div>
    </div>
  )
}

export default Nav