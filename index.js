/** @jsx jsx */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { jsx, css } from '@emotion/core';
import '@babel/polyfill';

import List from './src/List';
import Menu from './src/Menu';

// Style for whole app
const mainStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial';
`;

// Style for grid containing category list and menu items
const menuGridStyle = css`
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: 1fr 2fr;
  width: 66%;
`;

// Root component
const App = () => {
  const [selectedCategory, setCategory] = useState(null);

  const onCategoryChange = newCategory => {
    setCategory(newCategory);
  };

  return (
    <div className="main" css={mainStyle}>
      <div className="menu-grid" css={menuGridStyle}>
        <List onCategoryChange={onCategoryChange} />
        {selectedCategory ? (
          <Menu categoryShortName={selectedCategory.short_name} />
        ) : (
          <div>Please select a category from the left!</div>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
