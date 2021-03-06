import React from 'react'
import './FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size='20' style={{ color: 'white', marginRight: '2rem' }} />
                        <div>   
                            <p>123 Housing Society</p>
                            <p>Kota, Rajasthan </p>
                        </div>
                    </div>
                    <div className='phone '>
                        <h4>
                            <FaPhone size='20' style={{ color: 'white', marginRight: '2rem' }} /> 1-2345-6789
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size='20' style={{ color: 'white', marginRight: '2rem' }} /> abcd@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio reiciendis error, minus libero amet?</p>
                    <div className="social">
                        <FaFacebook size='30' style={{ color: 'white', marginRight: '1rem' }} />
                        <FaTwitter size='30' style={{ color: 'white', marginRight: '1rem' }} />                         <FaLinkedin size='30' style={{ color: 'white', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
