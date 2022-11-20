import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <h1>Connect with us!</h1>
      <div class="prop-container">
              <a href="https://www.facebook.com/gdscwmu" target="_blank"><i className="footer-prop fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/gdsc_wmu/?hl=en" target="_blank"><i className="footer-prop fab fa-instagram"></i></a>
              <a href='https://www.linkedin.com/in/gdsc-wmu-a76314254/' target="_blank"><i className="footer-prop fab fa-linkedin-in"></i></a>
              <a href='https://discord.gg/FppTxzMy' target="_blank"><i className="footer-prop fab fa-discord"></i></a>
              <a href='https://www.youtube.com/channel/UClB2XQHuXfSCpBCoFjIJUmA/featured' target="_blank"><i className="footer-prop fab fa-youtube"></i></a>
      </div>
      <p>Western Michigan University</p>
      <p>Kalamazoo, Michigan, United States</p>
    </div>
  )
}

export default Footer
