import React from 'react'
import {GiUfo} from 'react-icons/gi'


import './style.css'

function Header({openMenu}) {
  return (
    <nav>
      <h1>Area51</h1>
        <GiUfo onClick={openMenu} className='icon-menu'/>
      <ul className='ul-nav'>
        <li>EXPERIENCIAS</li>
        <li>ENCUENTROS</li>
        <li>GALERIA</li>
      </ul>
    </nav>
  )
}

export default Header