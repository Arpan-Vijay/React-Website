import React from 'react'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import HeroImage2 from '../Components/HeroImage2'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading='Contact' text="Let's have a chat"/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact
