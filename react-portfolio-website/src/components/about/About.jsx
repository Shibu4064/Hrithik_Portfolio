import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='section'>
    <div className='heading'>
    <h5>Get To Know</h5>
      <h2>About Me</h2>
    </div>

    <div className='container'>
        <div className="about__container">
          <div className="about__me">
            <img src={ME} alt="About_Image" className='about__me-image'/>
          </div>


        <div className="about__content">
           <div className="about__cards">
            <article className='about__card'>
            <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
            <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ users worldwide</small>
            </article>
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
           </div>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, dolorem consectetur obcaecati ex, ab assumenda molestiae eos, et doloremque fuga a. Esse blanditiis dolor quis modi tenetur exercitationem doloremque, iure dolores, excepturi voluptas error culpa at ut voluptatibus delectus nostrum quaerat consequatur! Expedita cupiditate voluptatum reprehenderit laudantium quibusdam repudiandae consectetur.
           </p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
