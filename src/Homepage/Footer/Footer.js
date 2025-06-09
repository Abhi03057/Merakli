import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-columns">
        <div>
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Stories</p>
          <p>Press</p>
          <p>Corporate Information</p>
        </div>
        <div>
          <h4>GROUP COMPANIES</h4>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>
        <div>
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>
        <div>
          <h4>CONSUMER POLICY</h4>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>No Rights reserved. Made by Abhyuday Singh Panwar.</p>
        <div className="social-icons">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
