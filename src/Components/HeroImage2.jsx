import React, { Component } from 'react'
import './HeroImage2Styles.css'

export default class HeroImage2 extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

