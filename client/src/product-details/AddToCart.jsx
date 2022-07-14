/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function AddToCart({ currentStyle, currentSize, setCurrentSize }) {
  // console.log(currentStyle.props);

  const stock = currentStyle.skus;

  const stockKeys = Object.keys(stock);

  const allSizes = [];
  for (let i = 0; i < stockKeys.length; i += 1) {
    allSizes.push(stock[stockKeys[i]]);
  }

  // console.log(allSizes);

  /* const amountOptions = [];
  for (let i = 1; i <= currentSize.quantity; i += 1) {
    amountOptions.push(<option key={i}>{i}</option>);
  }

  const handleSizeChange = (event) => {
    event.preventDefault();
    console.log('Size change!', event.target);
  };

  const sizeOptions = [];
  allSizes.forEach((item) => sizeOptions.push(<option key={item.size} value={item}>{item.size}</option>));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="addToCart">
      <select className="sizeOptions" onChange={handleSizeChange}>
        {sizeOptions}
      </select>
      <select className="amountOptions">
        {amountOptions}
      </select>
      <input className="cartButton" type="submit" value="Add to Cart" onSubmit={handleSubmit} />
    </form>
  ); */
}

export default AddToCart;
