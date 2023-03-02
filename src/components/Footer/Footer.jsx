import React from "react";
import "./footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const footer__contact__list = [
  {
    href: "tel:+918928755932",
    icon: <BiPhoneCall />,
    text: "+91 89287 55932",
  },
  {
    href: "https://wa.me/+918928755932",
    icon: <BsWhatsapp />,
    text: "WhatsApp",
  },
  {
    href: "mailto:hamzahb.gst@gmail.com",
    icon: <MdOutlineEmail />,
    text: "hamzahb.gst@gmail.com",
  },
  {
    href: "#",
    icon: <BsLinkedin />,
    text: "LinkedIn",
  },
  {
    href: "#",
    icon: <BsFacebook />,
    text: "Facebook",
  },
  {
    href: "#",
    icon: <BsInstagram />,
    text: "Instagram",
  },
];

const Footer = () => {
  return (
    <div className="row row__footer">
      <div className="col col__contact">
        <a href="#">
          <h5>Contact to Us</h5>
        </a>
        {footer__contact__list.map(({ href, icon, text }) => (
          <a href={href} target="_black">
            <ul>
              <li>{icon}</li>
              <li>{text}</li>
            </ul>
          </a>
        ))}
      </div>
      <div className="col col__footer">Address</div>
      <div className="col">Other details</div>
    </div>
  );
};

export default Footer;
