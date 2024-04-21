import './contact.css';
import { Opulento } from "uvcanvas";
import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  <Opulento />
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_1genre6',
        'template_l87sg0k',
        formRef.current,
        '9RVmoAp9H9fJKkE0m'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided 
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mail@nirmalyax.dev</h5>
            <a href="mailto:nirmalya267@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="from_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP </span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
