import React from 'react';

const Main = () => {
  return (
    <div className="mp-wrapper">
      {/* 상단 컨테이너  */}
      <div className="mp-top-container">
        <div className="mp-top-content">
          <div className="mp-greeting-text">
            <div className="mp-user-name">User님</div>
            <div className="mp-saved-links">
              <span className="mp-highlight">저장해둔 18개의 링크</span>를
            </div>
            <div className="mp-message">잊지않고 열어보셨네요 !</div>
          </div>
          <div className="mp-icon-container">
            <img
              src="/assets/img/mainPage-img.png"
              alt="메뉴 아이콘"
              className="mp-icon"
            />
          </div>
        </div>
        <div className="mp-input-container">
          <input
            type="text"
            className="mp-link-input"
          />
          <button className="mp-save-button">저장하기</button>
        </div>
      </div>
      {/* 링크 저장소 */}
      <div className="mp-link-storage-section">
        <div className="mp-section-header">
          <h2 className="mp-section-title">링크저장소</h2>
          <span className="mp-more">더보기</span>
        </div>
        <div className="mp-link-category-container">
          <div className="mp-link-category-box">
              <div className="mp-link-count">18</div>
              <div className="mp-category-name">전체</div>
          </div>
          <div className="mp-link-category-box">
              <div className="mp-link-count">7</div>
              <div className="mp-category-name">IT</div>
          </div>
          <div className="mp-link-category-box">
              <div className="mp-link-count">1</div>
              <div className="mp-category-name">음악</div>
          </div>
          <div className="mp-link-category-box">
              <div className="mp-link-count">0</div>
              <div className="mp-category-name">사회뉴스</div>
          </div>
        </div>
      </div>
      {/* 최근 열어본 링크 */}
      <div className="mp-recent-links-section">
        <h2 className="mp-section-title">최근 열어본 링크</h2>
        <div className="mp-recent-links-boxes">
          <div className="mp-recent-box"></div>
          <div className="mp-recent-box"></div>
          <div className="mp-recent-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;