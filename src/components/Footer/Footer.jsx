import React from "react";
import "./footer.css";
import { contact__list } from "../Data__structure";

const Footer = () => {
  return (
    <div className="row row__footer">
      <div className="col col__contact">
        <a href="#">
          <h5>Contact to Us</h5>
        </a>
        {contact__list.map(({ href, icon, text }) => (
          <a href={href} target="_black">
            <ul>
              <li>{icon}</li>
              <li>{text}</li>
            </ul>
          </a>
        ))}
      </div>
      <div className="col col__footer">
        <a href="https://goo.gl/maps/tsLr6Pz7S8Gdb5bG8" target="_blank">
          <h5>Address</h5>
          <span className="footer__address">
            Flat No.115, Mohammedi Mohalla Near Kanji House, Nagpur-440017.
          </span>
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4641906067322!2d79.12505651424786!3d21.17371128819146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c6df28c9d971%3A0x77cf122e55021eec!2sFakhri%20Masjid%2CBohra%20Mosque!5e0!3m2!1sen!2sin!4v1677858562884!5m2!1sen!2sin"
          className="gmap"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="col">Other details</div>
    </div>
  );
};

export default Footer;
