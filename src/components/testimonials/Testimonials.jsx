import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

//import swiper core and required modules

import {Pagination, } from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';


//import switper style
import 'swiper/css';
import 'swiper/css/pagination';


const Data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptate nemo? Delectus, illo modi accusantium eveniet corrupti quisquam quod harum, debitis, dignissimos dolorum id placeat accusamus deserunt maxime tempore et."
  },
  {
    avatar: AVTR2,
    name: "Shata Wale",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptate nemo? Delectus, illo modi accusantium eveniet corrupti quisquam quod harum, debitis, dignissimos dolorum id placeat accusamus deserunt maxime tempore et."
  },
  {
    avatar: AVTR3,
    name: "Kwame Despito",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptate nemo? Delectus, illo modi accusantium eveniet corrupti quisquam quod harum, debitis, dignissimos dolorum id placeat accusamus deserunt maxime tempore et."
  },
  {
    avatar: AVTR4,
    name: "Nana Sotai McBrown",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptate nemo? Delectus, illo modi accusantium eveniet corrupti quisquam quod harum, debitis, dignissimos dolorum id placeat accusamus deserunt maxime tempore et."
  },

]


const Testimonials = () => {
  return (
    <section id='testimonial'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
        //install swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        pagination= {{clickable:true}}
        >
          {
            Data.map(({avatar,name, review}, index) =>{
              return (

            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
            <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                {review}
               </small>
          </SwiperSlide>

              )
            })
          }
          
          
        </Swiper>
    </section>
  )
}

export default Testimonials