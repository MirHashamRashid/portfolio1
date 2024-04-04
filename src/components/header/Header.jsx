import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header>
      <div id='home' className="container header__container">
        <h5>Hello I'm</h5>
        <h2>MirHasham Rashid</h2>
        <h5 className="text-light">Front-end web Developer</h5>
        <CTA/>
        <HeaderSocial />
        <div className="me">
          <img  src={ME} alt="me" />
        </div>

        <Link smooth={true} to="contact"  className='scroll__down'>Scroll Down</Link>
      </div>
    </header>
  )
}

export default Header