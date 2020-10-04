import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './NewProduct.css';

const NewProduct = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = event => {
    setEnteredPrice(event.target.value);
  };

  const submitProductHandler = event => {
    event.preventDefault();
    props.onAddProduct(enteredTitle, enteredPrice);
  };

  return (
    <section id="new-product">
      <center>
        <h2>Rate a movie</h2>
      </center>
      <hr color = 'blue' />
      <form onSubmit={submitProductHandler}>
        <Input
          type="text"
          label="Movie name"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type="number"
          label="Review from 1 to 10"
          step={0.01}
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <Button type="submit">ADD REVIEW</Button>
      </form>
    </section>
  );
};

export default NewProduct;