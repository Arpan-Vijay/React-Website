import React from 'react'
import Footer from '../Components/Footer'
import HeroImage from '../Components/HeroImage'
import Navbar from '../Components/Navbar'
import Work from '../Components/Work'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage/>
        <Work/>
        <Footer/> 
    </div>
  )
}

export default Home
