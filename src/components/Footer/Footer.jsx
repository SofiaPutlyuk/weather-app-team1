import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        24/7<br />
        forecast
      </div>

      <div className="footer__address">
        <strong>Address</strong><br />
        Svobody str. 35<br />
        Kyiv<br />
        Ukraine
      </div>

      <div className="footer__contact">
        <strong>Contact us</strong>
        <div className="footer__social-icons">
          <a href="#" className="instagram" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="facebook" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" className="whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;