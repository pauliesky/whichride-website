import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <> <div className='footer__container-1' >


      <div>
        <div className='footer__container-1-title'  > Sign up to our beta form
        </div>
        <div className='footer__container-1-content' >
          Sign up to our mailing list to find out more
          information <br /> and keep up to date about our activities
        </div>
        <div className='footer__newsletter'>

          <div className='footer__container-1-email'>
            <p>email</p>
          </div>
          <div className='footer__container-1-button'>
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    </div>

      <div className='footer__container-2'>
        <div className='footer__container-2-content'  >
          <div> 2020 Whichride - All rights reserved.   </div>
          <div className='privy'>
          </div>Privacy PolicyTerms and Conditions
        </div>

      </div>
    </>
  )
}

export default Footer
