import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {FaInstagram,FaYoutube} from 'react-icons/fa'
import {FiTwitter,FiLinkedin,FiFacebook} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="footer">
      <div className="f1">
        {/* <h3>website Name</h3> */}
        <p>Please Follow our social media pages for more updates</p>
        <div className="links">
          <Link to="">
            <FiFacebook color='white' />
          </Link>
          <Link to="">
            <FiTwitter color='white' />
          </Link>
          <Link to="">
            <FaInstagram color='white' />
          </Link>
          <Link to="">
            <FiLinkedin color='white' />
          </Link>
          <Link to="">
            <FaYoutube color='white' />
          </Link>
        </div>
      </div>
      <div className="f2">
        <h3>LINKS</h3>
        <div className="f2-l">
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/about">
            <a>About Us</a>
          </Link>
          <Link to="/research">
            <a>Research</a>
          </Link>
          <Link to="/people">
            <a>People</a>
          </Link>
          <Link to="/awards">
            <a>Awards</a>
          </Link>
          <Link to="/contact">
            <a>Contact Us</a>
          </Link>
        </div>
      </div>
      <div className="f3">
        <h3>Contact Info.</h3>
        <p>+91-1332-284926</p>
        <p>
          <a href="mailto:ashwini@ch.iitr.ac.in">ashwini@ch.iitr.ac.in</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
