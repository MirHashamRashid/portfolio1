import React from 'react'
import { FaFacebookF} from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'
import { IoLogoTwitter} from 'react-icons/io'
import { Link } from 'react-scroll'
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>MirHasham Rashid</a>

      <ul className='permalinks'>
        <li><Link smooth={true} to="home">Home</Link></li>
        <li><Link smooth={true} to="about">About</Link></li>
        <li><Link smooth={true} to="experience">Experience</Link></li>
        <li><Link smooth={true} to="services">Services</Link></li>
        <li><Link smooth={true} to="portfolio">Portfolio</Link></li>
        <li><Link smooth={true} to="testimonial">Testimonials</Link></li>
        <li><Link smooth={true} to="contact">Contacts</Link></li>
      </ul>

      <div className='footer__social'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Rashid. {new Date().getFullYear()} All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer