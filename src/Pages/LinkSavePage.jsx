import React from 'react';

const LinkSavePage = () => {
  return (
    <div className="lsp-wrapper">
      <h1 className="lsp-header">링크저장소</h1>

      <div className="lsp-search-area">
        <div className="lsp-search-input-container">
          <img 
            src="assets\img\search.png" 
            alt="검색 아이콘" 
            className="lsp-search-icon"
          />
          <input 
            type="text" 
            className="lsp-search-input" 
            placeholder="검색어를 입력하세요."
          />
        </div>
      </div>

      {/* 카테고리 영역 */}
      <div className="lsp-category-container">

        <div className="lsp-category-box">
          <div className="lsp-category-count">12</div>
          <div className="lsp-category-name">전체</div>
        </div>
        <div className="lsp-category-box">
          <div className="lsp-category-count">8</div>
          <div className="lsp-category-name">식물</div>
        </div>
        <div className="lsp-category-box">
          <div className="lsp-category-count">8</div>
          <div className="lsp-category-name">IT</div>
        </div>
        <div className="lsp-category-box">
          <div className="lsp-category-count">15</div>
          <div className="lsp-category-name">요리</div>
        </div>
        <div className="lsp-category-box">
          <div className="lsp-category-count">10</div>
          <div className="lsp-category-name">음악</div>
        </div>
      </div>
    </div>
  );
};

export default LinkSavePage;
