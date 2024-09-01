import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Potfolio from './Components/Potfolie/Potfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const PotApp = () => {
  const [showmore,setShowMore] = useState('')
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services showmore={showmore} setshowMore={setShowMore} />
    <Potfolio/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default PotApp