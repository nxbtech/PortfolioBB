import React from 'react';
import './styles/portfolioFilterBar.scss';

const PortfolioFilterBar = ({ categories, selectedCategory, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__buttons">
        <button
          className={`filter-bar__button ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          Tous
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-bar__button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilterBar;