import React from "react";
import HRLine from "../assets/images/FooterHRLine.png";
import SideImg from "../assets/images/FooterSideImg.png";
import FacebookIcon from "../assets/images/FacebookIcon.png";
import InstagramIcon from "../assets/images/InstagramIcon.png";
import LinkedinIcon from "../assets/images/LinkedinIcon.png";
import TwitterIcon from "../assets/images/TwitterIcon.png";
import YoutubeIcon from "../assets/images/YoutubeIcon.png";

const socialIcons = [
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
];
const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-hr-img" src={HRLine} alt="" srcset="" />
      <div className="footer-body">
        {/* three section in a row  */}
        <div className="footer-left">
          <img src={SideImg} alt="" srcset="" />
        </div>
        <div className="footer-center">
          <p>Follow us on</p>
          <div className="social-icons">
            {socialIcons.map((icon) => (
              <img src={icon} alt="" srcset="" />
            ))}
          </div>
        </div>
        <div className="footer-right">
          <img src={SideImg} alt="" srcset="" />
        </div>
      </div>
      <img className="footer-hr-img" src={HRLine} alt="" srcset="" />
    </div>
  );
};

export default Footer;
