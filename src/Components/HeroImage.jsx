import React from 'react'
import '../Components/HeroImageStyles.css'
// import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className="mask">
        {/* <img className='intro-img' src={IntroImg} alt='introImg'></img> */}
      </div>
      <div className="content">
        <p className='subheading'>Hi, I am a Freelancer</p>
        <h1 className='heading'>
          <div className="wrapper"><span>React</span></div>
          <div className="wrapper"><span>Developer</span></div>
        </h1>
        <div className='buttons'>
          <Link to="/project" className='btn'>Projects</Link>
          <Link to="/contact" className='btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
