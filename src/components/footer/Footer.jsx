import React from 'react'
import { FaFacebookF} from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'
import { IoLogoTwitter} from 'react-icons/io'
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>MirHasham Rashid</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className='footer__social'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Rashid. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer