import React from 'react'
import './footer.css'
import Circlebtn from '../Circle-button/Circlebtn'

const Footer = () => {
  return (
    <footer className='padding_x'>
      <div className="footer-logo ">
        <a href="#home">Vashu</a>
      </div>
      <div className="footer-container">
        <div className="footer-nav-link">
            <h5>Useful Links</h5>
            <ul className="footer-menu">
                <li className="footer-menu-link">
                    <a href="#home">Home</a>
                </li>
                <li className="footer-menu-link">
                    <a href="#about">About</a>
                </li>
                <li className="footer-menu-link">
                    <a href="#work">Work</a>
                </li>
                <li className="footer-menu-link">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className="footer-social-link">
            <h5>Follow Me</h5>
            <ul className="social-menu">
               <li className='social-link'>
                    <a href="https://www.instagram.com/im.vashukashyap/" target='_blank'><i className="fa-brands fa-instagram"  title='Instagram'></i></a>
                </li>
                <li className="social-link">
                    <a href="https://github.com/vashu-kashyap" target='_blank'><i className="fa-brands fa-github"  title='Github'></i></a>
                </li>
                <li className="social-link">
                    <a href="https://www.linkedin.com/in/im-vashukashyap/" target='_blank'><i className="fa-brands fa-linkedin-in"  title='Linkedin'></i></a>
                </li>
            </ul>
        </div>
        <div className="contact-btn">
           <Circlebtn btnvalue={"Contact "} btnlink={'tel:+918287651128'} />
        </div>

      </div>
      <div className="copywrite">
            <p>Copyright © Im.VashuKashyap @2023. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
