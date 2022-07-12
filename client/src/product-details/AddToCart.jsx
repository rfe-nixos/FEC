/* eslint-disable react/destructuring-assignment */
import React from 'react';

function AddToCart(style) {
  const sizes = Object.keys(style.props.stock);
  const amounts = Object.values(style.props.stock);

  const sizeOptions = [];
  sizes.forEach((size) => sizeOptions.push(<option key={size}>{size}</option>));
  const amountOptions = [];
  amounts.forEach((amount) => amountOptions.push(<option key={amount}>{amount}</option>));

  return (
    <form className="addToCart">
      <select>
        {sizeOptions}
      </select>
      <select>
        {amountOptions}
      </select>
      <input type="submit" value="Add to Cart" />
    </form>
  );
}

export default AddToCart;
