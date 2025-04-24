import React from "react";

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-img-container">
        <img 
          src="/assets/img/Logo_font_white.png" 
          className="footer-logo footer-logo-font"
          alt="폰트 로고"
        />
        <img 
          src="/assets/img/Logo_white.png" 
          className="footer-logo footer-logo-symbol" 
          alt="심볼 로고"
        />
      </div>
      <div className="footer-Text">
        <div>Team ILoveYu | 권가령 | 유진승 | 박성민 | 김근모</div>
        <div>Copyrightⓒ 2025 Linky . All rights reserved</div>
      </div>
    </div>
  )
}

export default Footer;