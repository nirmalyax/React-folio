import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      //link: '',
      name: 'Kapil Upadhyay',
      role: 'Subject Matter Expert',
      test: 'I met Nirmalya in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process.',
    },
    {
      id: 2,
      //link: '',
      name: 'Raul Yadav',
      role: 'Automation Engineer',
      test: "It was a pleasure collaborating with Nirmalya with the recent project. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge.",
    },
    {
      id: 3,
      //link: '',
      name: 'Somnath Giri',
      role: 'Full Stack Developer.',
      test: 'I worked with Nirmalya in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      //link: '',
      name: 'Robert Scott',
      role: 'Health Tech HR | Managing the recruitment process for Health Tech companies in the UK and remotely.',
      test: "Working with Nirmalya was a breeze. Their web development skills is good, and he will grow very high. Nirmalya's attention to detail, commitment to deadlines, and clear communication made the entire process smooth and enjoyable. We're extremely satisfied with the end result and look forward to collaborate with him.",
    },
    {
      id: 5,
      //link: '',
      name: 'Elshad Bashirov',
      role: 'Software Developer',
      test: "Nirmalya has always conducted politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials