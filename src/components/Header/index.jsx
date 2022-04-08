import React from 'react'
import {GiUfo} from 'react-icons/gi'
import { Link , animateScroll as scroll} from 'react-scroll'
import './style.css'



function Header({openMenu}) {
 const scrollTop = () =>{
   scroll.scrollToTop('section-hero',{
     delay: 100,
     duration: 1200,
     smooth: true,
   });
 }


  return (
    <nav>
      <h1 onClick={scrollTop}>AREA 51</h1>
        <GiUfo onClick={openMenu} className='icon-menu'/>
      <ul className='ul-nav'>
      <li><Link activeClass='active' to='sectionExperience' offset={-60} duration={500} spy smooth>EXPERIENCIAS</Link></li>
      <li><Link activeClass='active' to='sectionEncounters' offset={-60} duration={500} spy smooth>ENCUENTROS</Link></li>
      <li><Link activeClass='active' to='sectionGalery' offset={-60} duration={500} spy smooth>FOTOS</Link></li>
      </ul>
    </nav>
  )
}

export default Header