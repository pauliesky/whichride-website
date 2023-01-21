import React from 'react'
import './Hero.css'
import phone2 from '../../assets/image 2.png'



const Hero = () => {
  return (
    <>
      <div className='hero__container' >

        <div className='hero__container-text'>
          <div className='hero__container-title'>Compare & book <br />ride-hailing providers
          </div>
          <div className='hero__container-content'>Save money and time with WhichrRide.<br />
            Think Compare the market but for taxis.
          </div>
        </div>



        <div className='hero__container-image'>
          <img className='hero__container-img' alt='phone' src={phone2}>
          </img>
        </div>
      </div>

    </>
  )
}

export default Hero