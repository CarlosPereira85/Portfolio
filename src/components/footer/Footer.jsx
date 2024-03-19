import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title" style={{textAlign:"center"}}>Carlos Pereira</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Über mich
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projekte
            </a>
          </li>
         
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/Carlos.Caique"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/CarlosPereira85"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/carlos-pereira-0b847b235/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Carlos Pereira. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
