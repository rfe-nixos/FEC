/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';

function AddToCart({ currentStyle, currentSize, setCurrentSize, currentAmount, setCurrentAmount }) {
  const stock = currentStyle.skus;

  const stockKeys = Object.keys(stock);

  const allOptions = {};
  for (let i = 0; i < stockKeys.length; i += 1) {
    allOptions[stock[stockKeys[i]].size] = stock[stockKeys[i]].quantity;
  }

  const sizes = Object.keys(allOptions);
  const sizeOptions = [];
  sizes.forEach((size) => sizeOptions.push(<option key={size} value={size}>{size}</option>));

  const amountOptions = [];
  if (currentSize !== 'Select a Size') {
    const amount = allOptions[currentSize];
    for (let i = 1; i <= amount; i += 1) {
      amountOptions.push(<option key={i}>{i}</option>);
    }
  }

  const handleSizeChange = (event) => {
    event.preventDefault();
    setCurrentSize(event.target.value);
  };

  const handleAmountChange = (event) => {
    event.preventDefault();
    setCurrentAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="addToCart">
      <select className="sizeOptions" onChange={handleSizeChange}>
        <option key="defaultSize" value="Select a Size">Select a Size</option>
        {sizeOptions}
      </select>
      <select className="amountOptions" onChange={handleAmountChange}>
        <option key="defaultAmount" value="Select an Amount">Select an Amount</option>
        {amountOptions}
      </select>
      <input className="cartButton" type="submit" value="Add to Cart" onSubmit={handleSubmit} />
    </form>
  );
}

export default AddToCart;
