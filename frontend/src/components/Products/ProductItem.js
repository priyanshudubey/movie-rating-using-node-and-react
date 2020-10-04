import React from 'react';

import './ProductItem.css';

const ProductItem = props => {
  return (
    <li className="product-item">
      <h2>{props.name}</h2>
      <p>Rating: {props.price}</p>
    </li>
  );
};

export default ProductItem;
