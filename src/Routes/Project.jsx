import React from 'react'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import Navbar from '../Components/Navbar'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading='Projects' text='Some of my most recent works'/>
      <Work />
      <PricingCard/> 
      <Footer/>
    </div>
  )
}

export default Project
