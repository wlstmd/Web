import React from 'react';
import { Link } from 'react-router-dom';

export const categories = [
  { id: 'all', name: '전체', count: 32 },
  { id: 'plants', name: '식물', count: 8 },
  { id: 'it', name: 'IT', count: 8 },
  { id: 'cooking', name: '요리', count: 14 },
  { id: 'music', name: '음악', count: 0 },
];

const CategoryPage = () => {
  return (
    <div className="lsp-wrapper">
      <h1 className="lsp-header">링크저장소</h1>

      <div className="lsp-search-area">
        <div className="lsp-search-input-container">
          <img 
            src="assets/img/search.png" 
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

      <div className="lsp-category-container">
        {categories.map((category) => (
          <Link
            to={`/CategoryPage/${category.id}`}
            state={{ categoryName: category.name }}
            key={category.id}
            className="lsp-category-box"
          >
            <div className="lsp-category-count">{category.count}</div>
            <div className="lsp-category-name">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
