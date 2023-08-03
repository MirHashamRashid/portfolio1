import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kbw3ubt', 'template_eq8v64a', form.current, 'adrJuv3TQNk3_WCnr')
      e.target.reset();
  };
 
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>mirhashem.rashid@gmail.com</h5>
          <a href="mailto:mirhashem.rashid@gmail.com" rel='noreferrer' target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>MirHasham Rashid</h5>
          <a href="https://m.me/mudasir.rashid.3344" rel='noreferrer' target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>MirHasham Rashid</h5>
          <a href="https://api.whatsapp.com/send?phone=+93711906588" rel='noreferrer' target='_blank'>Send a message</a>
        </article>

      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your message' required></textarea>
        <button type='submit' className='btn btn-primary'>send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact