import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form =useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_q76oibo', 'template_eajta2x', form.current, 'G2HMG0uI-mpjZopOI')
    e.target.reset();
};
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>dummy12345@gmail.com</h5>
          <a href="mailto:dummy12345@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>dummy12345</h5>
          <a href="https://m.me/id=100088186301848" target="_blank" >Send a message</a>
        </article>
        <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <h5>+8801632700557</h5>
          <a href="https://api.whatsapp.com/send?phone+8801632700557" target="_blank" >Send a message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contact
