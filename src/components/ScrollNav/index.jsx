import React from 'react'
import {Link} from 'react-scroll';
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
              <li><Link activeClass='active' to='sectionExperience' offset={-50} duration={500} spy smooth onClick={openMenu} href="">EXPERIENCIAS</Link></li>
              <li><Link activeClass='active' to='sectionEncounters' offset={-70} duration={500} spy smooth onClick={openMenu} href="">ENCUENTROS</Link></li>
              <li><Link activeClass='active' to='sectionGalery' offset={-50} duration={500} spy smooth onClick={openMenu} href="">FOTOS</Link></li>
            </ul>
            </nav>
          :
            ''

      }
    </>

  )
}

export default ScrollNav