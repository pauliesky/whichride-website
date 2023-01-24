import React from 'react'
import './About.css'
import car from '../../assets/car.png'
import time from '../../assets/time.png'
import choice from '../../assets/choice.png'
import safe from '../../assets/safe.png'


const About = () => {
  return (

    <>
      <div className='about' >
        <div className='about__title'>Why Whichride</div>
        <div className='about__content' >

          <div className='about__grid' data-aos='fade-right' >
            <div className='about__content-1-logo'>
              <div className='logo-car'>
                <img alt='car' src={car}></img>
              </div>
            </div>
            <div className='about__content-1-title' >
              More choices
            </div>
            <div className='about__content-1-body'>
              WhichRide lets you compare pricing<br /> across the major rideshares so you can <br />save money on every ride.</div>
          </div>
          <div className='about__grid' data-aos='fade-left'>
            <div className='about__content-3-logo'>
              <div className='logo-choice'>
                <img alt='car' src={choice}></img>
              </div>
            </div>
            <div className='about__content-3-title' >
              More choices
            </div>
            <div className='about__content-3-body'>
              WhichRide lets you compare pricing<br /> across the major rideshares so you can <br />save money on every ride..</div>
          </div>
          <div className='about__grid' data-aos='fade-right' >
            <div className='about__content-2-logo'>
              <div className='logo-time'>
                <img alt='car' src={time}></img>
              </div>
            </div>
            <div className='about__content-2-title' >
              More choices
            </div>
            <div className='about__content-2-body'>
              WhichRide lets you compare pricing<br /> across the major rideshares so you can <br />save money on every ride.</div>
          </div>
          <div className='about__grid' data-aos='fade-left'>

            <div className='about__content-4-logo'>
              <div className='logo-safe'>
                <img alt='car' src={safe}></img>
              </div>
            </div>
            <div className='about__content-4-title' >
              Safety First
            </div>
            <div className='about__content-4-body'>
              WhichRide lets you compare pricing<br /> across the major rideshares so you can <br />save money on every ride.</div>
          </div>
        </div>
      </div>


    </>
  )
}

export default About
