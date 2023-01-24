import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo (1).png'
// import logo from '../../assets/logo.png'
// import w from '../../assets/W.png'
// import h from '../../assets/H.png'
// import i from '../../assets/I.png'
// import c from '../../assets/C.png'
// import r from '../../assets/R.png'
// import d from '../../assets/D.png'
// import e from '../../assets/E.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'


const Navbar = () => {


  const [mobile, setMobile] = useState(false)

  return (
    <>
      <nav className='navbar'>
        <div className='nav__logo'>
          {/* <img className='logo__img' alt='l' src={logo} ></img>
          <img className='logo__img' alt='w' src={w} ></img>
          <img className='logo__img' alt='h' src={h} ></img>
          <img className='logo__img' alt='i' src={i} ></img>
          <img className='logo__img' alt='c' src={c} ></img>
          <img className='logo__img' alt='h' src={h} ></img>
          <img className='logo__img' alt='r' src={r} ></img>
          <img className='logo__img' alt='i' src={i} ></img>
          <img className='logo__img' alt='d' src={d} ></img>
          <img className='logo__img' alt='e' src={e} ></img> */}
          <img alt='logo'  src={Logo}></img>
        </div>
        <div className={mobile ? 'nav__links-mobile' : 'nav__links'} onClick={() => setMobile(false)} >
          <div className='nav__links-1'>The App</div>
          <div className='nav__links-2' >About Us</div>
          <div className='nav__links-3'>Get in Touch
          </div>

        </div>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)} >
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

    </>
  )
}

export default Navbar