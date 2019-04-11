/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';

import ENDPOINT from './endpoint';

// Styles for menu categories list
const listStyle = css`
  .category-list-item {
    padding-top: 3px;
    padding-bottom: 3px;

    &:hover {
      cursor: pointer;
      background-color: #ddd;
    }

    &.selected {
      background-color: #ddd;
    }
  }
`;

const List = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const fetchCategoryList = async () => {
    // Fetch list and set on component state
    const response = await axios.get(`${ENDPOINT}/category`);
    setCategories(response.data);
  };

  // Fetch the list only on first render
  useEffect(() => {
    fetchCategoryList();
  }, []);

  const handleCategoryChange = selectedCategory => {
    console.log(`setting cat to: ${selectedCategory.id}`);
    onCategoryChange(selectedCategory);
    setActiveCategory(selectedCategory);
  };

  return (
    <div className="category-list" css={listStyle}>
      <h3>Menu categories:</h3>
      {categories.map(category => {
        return (
          <div
            className={`category-list-item ${
              !!activeCategory && activeCategory.id === category.id
                ? 'selected'
                : ''
            }`}
            key={category.id}
            onClick={() => handleCategoryChange(category)}
          >{`${category.name} - (${category.short_name})`}</div>
        );
      })}
    </div>
  );
};

export default List;
