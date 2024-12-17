import React from 'react'
import './Contact.css'
import '../../src/index.css'
import logo from '../assets/logo.png';
import gitlogo from '../assets/github_logo.jpeg';

const Contact = () => {
  return (
    <div className='main'>
      <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={logo} className='logo-container' alt="" />
            <p>Startup!  bring the world of food to your fingertips and deliver it straight to your doorstep. Whether it's desi, continental or street food we’ve got you covered.</p>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/mehak-fatima-08a568275/" target="_blank" rel="noopener noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrdlv1qle8ssb16zhv0dVmNpGUcLxqIlo-A&s" alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/MehakRauf" target="_blank" rel="noopener noreferrer">
                <img src={gitlogo} alt="" /><img src="" alt="" /><img src="" alt="" />
              </a>
            </div>
          </div>
          <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-212-456-7890</li>
              <li>contact@startup.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Startup.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Contact