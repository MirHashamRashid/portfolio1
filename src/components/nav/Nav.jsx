import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
// import { useState } from 'react';
import {Link} from 'react-scroll';
const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Link
      to='home' activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}
      ><AiOutlineHome/></Link>

      <Link
      to='about' activeClass='active'
      smooth={true}
      spy={true}
      
      ><AiOutlineUser/></Link>
      <Link
      to='experience' activeClass='active'
      smooth={true}
      spy={true}

      ><BiBook/></Link>
      <Link
      to='services' activeClass='active'
      spy={true}
      smooth={true}
      ><RiServiceLine/></Link>
      <Link
      to='contact' activeClass='active'
      spy={true}
      smooth={true}
      ><BiMessageSquareDetail/></Link>

{/*       
      <a href="#home" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a> */}
    </nav>
  )
}

export default Nav