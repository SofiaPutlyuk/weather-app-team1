import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo/logoForecast.svg';
import IconInstagram from '../../assets/images/instagram_icon.png'
import IconFacebook from '../../assets/images/facebook_icon.png'
import IconWhatsApp from '../../assets/images/whatsapp_icon.png'
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="24/7 forecast logo" />
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
          <a href="#" ><img src={IconInstagram} alt="icon-instagram" /></a>
          <a href="#" ><img src={IconFacebook} alt="icon-facebook" /></a>
          <a href="#" ><img src={IconWhatsApp} alt="icon-whatsapp" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;