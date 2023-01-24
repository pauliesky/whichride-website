import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo (1).png'
// import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'


const Navbar = () => {


  const [mobile, setMobile] = useState(false)

  return (
    <>
      <nav className='navbar'>
        <div className='nav__logo'>
          <img alt='logo' src={Logo}></img>
        </div>
        <ul className={mobile ? 'nav__links-mobile' : 'nav__links'} onClick={() => setMobile(false)} >
          <li className='nav__links-1'>The App</li>
          <li className='nav__links-2' >About Us</li>
          <li className='nav__links-3'>Get in Touch
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)} >
          {mobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </button>
      </nav>

    </>
  )
}

export default Navbar