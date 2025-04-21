import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { categories } from './CategoryPage';

const CategoryDetailPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const categoryName = location.state?.categoryName || '알 수 없음';
  const category = categories.find(c => c.id === categoryId);
  const boxCount = category ? category.count : 0;

  return (
    <div className="cdp-wrapper">
      {/* 헤더 */}
      <div className="cdp-header">
        <div 
          className="cdp-header-title"
          onClick={() => navigate('/CategoryPage')}
        >
          {categoryName} &gt;
        </div>
      </div>

      {/* 검색 */}
      <div className="cdp-search-area">
        <div className="cdp-search-input-container">
          <img 
            src="/assets/img/search.png" 
            alt="검색 아이콘" 
            className="cdp-search-icon"
          />
          <input 
            type="text" 
            className="cdp-search-input" 
            placeholder="검색어를 입력하세요."
          />
        </div>
      </div>

      {/* 링크 박스들 */}
      <div className="cdp-linkbox-container">
        {boxCount > 0 ? (
          Array.from({ length: boxCount }).map((_, idx) => (
            <div key={idx} className="cdp-linkbox">
              {/* 회색 링크 박스 자리 */}
            </div>
          ))
        ) : (
          <div className="cdp-no-links">저장된 링크가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
