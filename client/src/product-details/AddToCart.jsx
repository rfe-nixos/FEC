/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';

function AddToCart({
  currentStyle, currentSize, setCurrentSize, currentAmount, setCurrentAmount, sizeAlert, setSizeAlert,
}) {
  const stock = currentStyle.skus;

  if (Object.keys(stock).length === 0) {
    return (
      <div className="outOfStock">
        <select className="sizeOptions" isDisabled>
          <option key="outOfStock">OUT OF STOCK</option>
        </select>
        <select className="amountOptions">
          <option key="defaultAmount" value="-">-</option>
        </select>
      </div>
    );
  }

  const stockKeys = Object.keys(stock);

  const allOptions = {};
  for (let i = 0; i < stockKeys.length; i += 1) {
    allOptions[stock[stockKeys[i]].size] = stock[stockKeys[i]].quantity;
  }

  const sizes = Object.keys(allOptions);
  const sizeOptions = [];
  sizes.forEach((size) => sizeOptions.push(<option key={size} value={size}>{size}</option>));

  const amountOptions = [];
  if (currentSize !== '') {
    const amount = allOptions[currentSize];
    setCurrentAmount('1');
    if (amount < 15) {
      for (let i = 1; i <= amount; i += 1) {
        amountOptions.push(<option key={i} value={i}>{i}</option>);
      }
    } else {
      for (let i = 1; i <= 15; i += 1) {
        amountOptions.push(<option key={i} value={i}>{i}</option>);
      }
    }
  } else {
    amountOptions.push(<option key="defaultAmount" value="-">-</option>);
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
    if (currentSize === '') {
      setSizeAlert('Please select size');
    } else {
      const skuKeys = Object.keys(currentStyle.skus);
      let skuId;
      skuKeys.forEach((key) => {
        if (currentStyle.skus[key].size === currentSize) {
          skuId = key;
        }
      });
      skuId = parseInt(skuId);

      const cartConfig = {
        method: 'POST',
        url: `${process.env.API_URL}/cart`,
        data: { sku_id: skuId },
        headers: {
          Authorization: process.env.AUTH_KEY,
        },
      };
      axios(cartConfig)
        .then(() => {
          setSizeAlert('');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="addToCart">
      <p className="sizeAlert">{sizeAlert}</p>
      <form>
        <select className="sizeOptions" onChange={handleSizeChange}>
          <option key="defaultSize" value="Select Size">Select Size</option>
          {sizeOptions}
        </select>
        <select className="amountOptions" onChange={handleAmountChange}>
          {amountOptions}
        </select>
        <button className="cartButton" type="button" onClick={handleSubmit}>Add to Cart</button>
      </form>
    </div>
  );
}

export default AddToCart;
