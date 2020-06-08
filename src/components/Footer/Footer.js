import React from "react";
import { Link } from "react-router-dom";

import "../../styles/Footer/Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Inner">
        <div className="Footer-Top">
          <a href="/">HOME</a> <span>|</span>
          <a href="#service">SERVICE</a>
          <span>|</span>
          <a href="#watch">WATCH</a>
          <span>|</span>
          <a href="#details">WHO WE ARE</a>
          <span>|</span>
          <a href="#!">CONTACT</a>
          <span>|</span>
          <a href="#!">CAREERS</a>
          <span>|</span>
          <a href="#!">FAQ</a>
        </div>
        <div className="Footer-Center">
          <div>
            <a href="/">
              <i className="far fa-paper-plane"></i> <span>WATCH ME</span>
            </a>
          </div>
          <div className="FooterButtonContainer">
            <Link className="Footer-Button" to="/contact1">
              GET IN TOUCH
            </Link>
            <a href="#!" className="Footer-Button">
              NEWSLETTER
            </a>
          </div>
        </div>
        <div className="Footer-Bottom">
          <div className="Bottom-Inner">
            <p>© 2020 Watch Me, Developed by Danny Rhee</p>
            <a href="#i">PRIVACY NOTICE</a>
            <span>|</span>
            <a href="#i">TERMS OF USE</a>
            <span>|</span>
            <a href="#i">CATALOG</a>
          </div>
          <div className="Bottom-SNS">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-youtube-square"></i>
            <i className="fas fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
