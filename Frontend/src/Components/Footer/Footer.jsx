import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi numquam id aperiam quo, dicta non, molestiae fugiat, earum quisquam iusto obcaecati! A obcaecati nesciunt asperiores ad quos. Mollitia, tempora aliquid.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
             <h2>Comapny</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>
        </div>
        <div className="footer-content-right">
<h2>Get in touch</h2>
<ul>
    <li>+1-212-456-789</li>
    <li>contact@tomatogamil.com</li>
</ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 C Tomato.com-All right Reserverd.</p>
    
    </div>
  )
}

export default Footer
