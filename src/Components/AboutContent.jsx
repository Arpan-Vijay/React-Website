import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, eos.</p>
        <Link to='/contact'>
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
            <div className="image-stack-top">
                <img src={React1} alt=""  className='image '/>
            </div>
            <div className="image-stack-bottom">
                <img src={React2} alt=""  className='image '/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
