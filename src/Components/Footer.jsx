import React from "react";

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-img-container">
        <img 
          src="/assets/imgs/Font_Logo_white.png" 
          className="footer-logo footer-font-logo"
          alt="폰트 로고"
        />
        <img 
          src="/assets/imgs/Symbol_Logo_white.png" 
          className="footer-logo footer-symbol-logo" 
          alt="심볼 로고"
        />
      </div>
      <div className="footer-Text">
        <div>Copyrightⓒ 2025 Linky . All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer;
