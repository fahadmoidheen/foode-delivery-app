import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <div className="footer-social-icons">
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>get in touch</h2>

          <ul>
            <li> 9775487w5r84</li>
            <li>ksush@gmial.com </li>
          </ul>
        </div>
      </div>
      <hr />
      <p>© 2025 TOMATO. All rights reserved.</p>
    </div>
  );
}

export default Footer;
