import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        <div className=" container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt=" "/>
            </div>
              <h3>Crypto Currency Dashboard & Financial Visualization</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/20609981-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt=" "/>
            </div>
              <h3>Charts Templates & Infographics in Figma</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/20579251-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt=" "/>
            </div>
              <h3>iPad Smart Home App UI</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/20982911-iPad-Smart-Home-App-UI" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt=" "/>
            </div>
              <h3>Maintaining Tasks & Tracking Progress</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/shots/20981587-NFT-LandingPage-Dark-Version" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG5} alt=" "/>
            </div>
              <h3>Charts Templates $ Infographics using Flatter</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG6} alt=" "/>
            </div>
              <h3>Templates & Graphical Designs using Wordpress</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
        </div>
    </section>
  )
}

export default Portfolio
