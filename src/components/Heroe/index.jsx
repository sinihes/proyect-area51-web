import React from 'react'
import video from '../../assets/video/alb_ufo002_1080p.mp4'
import './style.css'

function Heroe() {
  return (
    <section className='section-hero'>
      <div className='wrapper-hero-video'>
        <video src={video} autoPlay loop muted type='video/mp4'></video>
      </div>
      <div className="wrapper-descriptions">
        <p>¿Estas buscando la verdad? Te ayudaremos a encontrarla</p>
        <p>La verdad esta hay fuera. Que nada te detenga para encontrarla.</p>
      </div>
    </section>
  )
}

export default Heroe