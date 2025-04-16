import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/assets/img/Logo.png" alt="로고" className="logo" />
        </Link>
      </div>
      <div className="header-right">
        <Link to="/linkSavePage" className="header-btn">링크저장소</Link>
        <Link to="/login" className="header-btn">로그인</Link>
      </div>
    </header>
  );
};

export default Header;
