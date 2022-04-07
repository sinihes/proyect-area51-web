import { useState } from 'react'

import './App.css'
import Heroe from './components/Heroe'
import Header from './components/Header'
import ScrollNav from './components/ScrollNav'
import Galery from './components/Galery'
import Footer from './components/Footer'
import Encounters from './components/Encounters'
import Experiencies from './components/Experiencies'
function App() {

  const [isOpen , setIsOpen] = useState(false)

  const openMenu = () =>{
    setIsOpen(!isOpen)
  }


  return (

    <div >
      <Header openMenu={openMenu}/>
      <ScrollNav isOpen={isOpen} openMenu={openMenu} />
      <Heroe/>
      <Experiencies/>
      <Encounters/>
      <Galery/>
      <Footer/>
    </div>
  )
}

export default App
