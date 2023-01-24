import React, { useEffect } from 'react'
import './Hero.css'
import phone2 from '../../assets/image 2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

// import { Animator, ScrollContainer, ScrollPage, Fade, batch, MoveIn } from 'react-scroll-motion';

const Hero = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>



      <div className='Hero'  >
      </div>
      <div className='hero__container' >

        <div className='hero__container-text'>
          <div className='hero__container-title'>Compare & book <br />ride-hailing providers
          </div>
          <div className='hero__container-content'>Save money and time with WhichrRide.<br />
            Think Compare the market but for taxis.
          </div>
        </div>
        <div className='hero__container-image' data-aos='fade-left'>
          <img className='hero__container-img' alt='phone' src={phone2}>
          </img>
        </div>
      </div>





    </>
  )
}

export default Hero