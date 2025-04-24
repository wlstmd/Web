import React from "react";

const LoginPage = () => {
  return (
    <div className="login-container">
    <div className="login-box">
    <div className="login-header">
    <h2 className="login-title">로그인</h2>
    <div className="login-logo">
      <img src="assets\imgs\Symbol_Logo_blue.png" alt="로고" />
    </div>
    </div>
    <form className="login-form">
      <label htmlFor="username">아이디</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">비밀번호</label>
      <input type="password" id="password" name="password" />

      <div className="login-options">
        <label style={{display: "flex"}}>
          <input type="checkbox" /> 로그인유지
        </label >
      </div>

      <button type="submit" className="login-button">로그인</button>
    </form>

    <div className="register-link">
      <a href="/signup">회원가입하기</a>
    </div>
  </div>
</div>

  );
};

export default LoginPage;
