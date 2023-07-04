import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='padding_x'>
      <div className="footer-logo ">
        <a href="">Vashu</a>
      </div>
      <div className="footer-container">
        <div className="footer-nav-link">
            <h5>Useful Links</h5>
            <ul className="footer-menu">
                <li className="footer-menu-link">
                    <a href="#">Home</a>
                </li>
                <li className="footer-menu-link">
                    <a href="#">About</a>
                </li>
                <li className="footer-menu-link">
                    <a href="#">Work</a>
                </li>
                <li className="footer-menu-link">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <div className="footer-social-link">
            <h5>Follow Me</h5>
            <ul className="social-menu">
                <li className="social-link"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li className="social-link"><a href="#"><i class="fa-brands fa-github"></i></a></li>
                <li className="social-link"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
        </div>
        <div className="contact-btn">
            <a href="">Contact Me</a>
        </div>

      </div>
      <div className="copywrite">
            <p>Copyright © Im.VashuKashyap @2023. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
