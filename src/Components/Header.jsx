import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/">
          <img src="/assets/img/Logo_font_blue.png" alt="로고" className="logo"/>
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink 
          to="/CategoryPage" 
          className={({ isActive }) => `header-btn ${isActive ? 'active' : ''}`}
        >
          링크저장소
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => `header-btn ${isActive ? 'active' : ''}`}
        >
          로그인
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
