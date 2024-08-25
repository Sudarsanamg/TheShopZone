import React from 'react'
import Hero from '../assets/hero_image.png'
import './Shoptop.css'

const Shoptop = () => {
  return (
    <div className='hero-banner'>
      <div className="hero-left">
        <div className="txt-hero">
          <p className='new'>NEW ARRIVALS ONLY</p>
          <h1 >Collections</h1>
          <h2>for everyone</h2>
          <button className='btn-latest'>Latest Collection →</button>
        </div>
      </div>
      <div className="hero-right">
        <img className='hero-img' src={Hero} alt="hero_image" />
      </div>
    </div>
    
  )
}

export default Shoptop