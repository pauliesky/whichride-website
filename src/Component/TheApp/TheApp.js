import React from 'react'
import './TheApp.css'
import img from '../../assets/iPhone X 2.png'



const TheApp = () => {

  return (
    <>
      <div className='theapp__container'>


        <div className='theapp__container-title' >
          Whichride brings together multiple ride hailing providers and local taxi firms in one app
        </div>

        <div className='theapp__container-body' >
          Allowing riders to select the provider that offers the best price, service or travel time, then seamlessly book within the app
        </div>

        <div className='theapp__container-content'>
          <div className='theapp__container-image   app-img-box'>


            <img className='theapp__container-image' alt='img' src={img} ></img>


          </div>
          <div className='theapp__container-content-body'>

            <div className='theapp__container-content-body-1' data-aos='fade-down'>
              <div className='logo-box'>
                <div className='theapp__container-content-body-1-logo'>
                  <div className='theapp__container-content-body-1-logo-text'>
                    Step
                  </div>
                  <div className='theapp__container-content-body-1-logo-digit'>1</div>
                </div>
              </div>
              <div>
                <div className='theapp__container-content-body-1-title'>
                  Enter location
                </div>
                <div className='theapp__container-content-body-1-body'>
                  Enter your destination to see a list of taxi<br />  providers near you.
                </div>
              </div>
            </div>

            <div className='theapp__container-content-body-2' data-aos='fade-down'>
              <div className='logo-box'>
                <div className='theapp__container-content-body-2-logo'>
                  <div className='theapp__container-content-body-2-logo-text' >Step</div>
                  <div className='theapp__container-content-body-2-logo-digit'>2</div>
                </div>
              </div>
              <div>
                <div className='theapp__container-content-body-2-title'>
                  Find the perfect ride
                </div>
                <div className='theapp__container-content-body-2-body'>
                  Filter results by driver rating, driver sex, waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric cars.
                </div>
              </div>


            </div>

            <div className='theapp__container-content-body-3' data-aos='fade-down'>
              <div className='logo-box' >
                <div className='theapp__container-content-body-3-logo'>
                  <div className='theapp__container-content-body-3-logo-text' >Step</div>
                  <div className='theapp__container-content-body-3-logo-digit'>3</div>
                </div>
              </div>
              <div>
                <div className='theapp__container-content-body-3-title'>
                  Pay and Save
                </div>
                <div className='theapp__container-content-body-3-body'>
                  Once you select a ride, we search the web for coupons to get you an even better deal, then book seemlessly within our app and earn points while you ride.
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>


    </>

  )
}

export default TheApp
