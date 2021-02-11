import React from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p>
          made with <FaHeart class="heart_icon" /> by{" "}
          <b class="footer__link">
            <a href="https://github.com/aaashir">aaashir</a>
          </b>
        </p>
      </div>
    </div>
  );
}

export default Footer;
