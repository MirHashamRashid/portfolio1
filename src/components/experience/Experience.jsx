import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Front-end development</h3>
        <div className="experience__content">
          {/* front-end skills set */}
          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>Tailwind</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          
          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
        </div>
        {/* front end section ends here */}

        <div className="experience__backend">
          <h3>Backend development</h3>
        <div className="experience__content">
          {/* Back-end skills set */}
          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>Nodejs</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          
          <article className="experience__details">
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

        </div>
        </div>

      </div>
    </section>
  )
}

export default Experience