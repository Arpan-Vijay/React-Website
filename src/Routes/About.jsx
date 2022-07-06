import React from 'react'
import AboutContent from '../Components/AboutContent'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="About" text="Front-End Developer"/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About
