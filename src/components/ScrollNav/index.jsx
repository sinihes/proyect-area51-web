import React from 'react'

import './style.css'
import {CgClose} from 'react-icons/cg'


function ScrollNav({isOpen ,openMenu}) {
  return (
    <>
      { 
            isOpen ? 
            <nav className='scroll-nav' >
            <CgClose className='icon-menu icon-menu-scroll' onClick={openMenu}/> 
            <ul>
              <li><a onClick={openMenu} href="">Experiencias</a></li>
              <li><a onClick={openMenu} href="">Encuentros</a></li>
              <li><a onClick={openMenu} href="">Fotos</a></li>
            </ul>
            </nav>
          :
            ''

      }
    </>

  )
}

export default ScrollNav