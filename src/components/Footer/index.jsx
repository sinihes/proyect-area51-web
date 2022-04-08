import React from 'react'
import { FaFacebookSquare, FaInstagramSquare ,FaTwitterSquare , FaYoutubeSquare} from 'react-icons/fa'

import './style.css'



function Footer() {
  return (
    <footer>
      <p>Area 51 redes solciales </p>
      <div>
        <FaFacebookSquare  className='icons-footer'/>
        <FaInstagramSquare className='icons-footer'/>
        <FaTwitterSquare   className='icons-footer'/>
        <FaYoutubeSquare   className='icons-footer'/>
      </div>    
    </footer>
  )
}

export default Footer