import React from "react";

const SignupPage = () => {
  return (
    <div className="join-container">
      <div className="join-box">
        <div className="join-header">
          <h2 className="join-title">회원가입</h2>
          <div className="join-logo">
            <img src="assets\imgs\Symbol_Logo_blue.png" alt="로고" />
          </div>
        </div>
        <form className="join-form">
          <label htmlFor="username">이름</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="userid">아이디</label>
          <input type="text" id="userid" name="userid" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password1" name="password1" />
          <label htmlFor="password">비밀번호확인</label>
          <input type="password" id="password2" name="password2" />
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" name="email" />
          <button type="submit" className="join-button">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
