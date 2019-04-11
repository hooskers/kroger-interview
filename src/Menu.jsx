/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';

import ENDPOINT from './endpoint';

// Styles for menu items table
const tableStyle = css`
  thead > tr {
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
    padding: 5px;
  }
  tr {
    &:nth-child(even) {
      background-color: #ddd;
    }
  }
`;

const Menu = ({ categoryShortName = null }) => {
  const [menuItems, setMenuItems] = useState([]);

  const fetchItemsByCategory = async categoryShortName => {
    const response = await axios.get(
      `${ENDPOINT}/item?category=${categoryShortName}`,
    );
    setMenuItems(response.data);
  };

  // Every time we get a new `categoryShortName` fetch the items for that menu
  useEffect(() => {
    categoryShortName && fetchItemsByCategory(categoryShortName);
  }, [categoryShortName]);

  return (
    <div>
      <h3 className="menu-category">{`Items in Category: (${categoryShortName})`}</h3>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{`$${item.price_large}.00`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
