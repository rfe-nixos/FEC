/* eslint-disable react/destructuring-assignment */
import React from 'react';

function AddToCart(currentStyle) {
  // console.log(currentStyle.props);

  if (Object.keys(currentStyle).length > 0) {
    const stock = currentStyle.props.skus;

    const handleSizeClick = (event) => {
      event.preventDefault();
    };

    if (stock !== undefined) {
      const stockKeys = Object.keys(stock);
      const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
      const currentSize = stock[stockKeys[0]].size;
      const currentSizeQuantity = stock[stockKeys[0]].quantity;

      const amountOptions = [];
      for (let i = 1; i <= currentSizeQuantity; i++) {
        amountOptions.push(<option key={i}>{i}</option>);
      }
      const sizeOptions = [];
      allSizes.forEach((size) => sizeOptions.push(<option key={size} onClick={handleSizeClick}>{size}</option>));

      const handleSubmit = (event) => {
        event.preventDefault();
      };

      return (
        <form className="addToCart">
          <select className="sizeOptions">
            {sizeOptions}
          </select>
          <select className="amountOptions">
            {amountOptions}
          </select>
          <input className="cartButton" type="submit" value="Add to Cart" onSubmit={handleSubmit} />
        </form>
      );
    }
  }
}

export default AddToCart;
