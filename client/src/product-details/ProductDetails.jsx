/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React from 'react';

function ProductDetails({ product, currentStyle, productReviews }) {
  if (Object.keys(productReviews.ratings).length > 0) {
    let starRating = '*';

    let averageRating = 0;
    let totalRatings = 0;
    for (let i = 1; i <= 5; i += 1) {
      averageRating += parseInt(productReviews.ratings[i]) * i;
      totalRatings += parseInt(productReviews.ratings[i]);
    }

    averageRating /= totalRatings;
    averageRating = averageRating.toFixed(2);

    if (currentStyle.sales_price) {
      console.log('1');
      return (
        <div className="productDetails">
          <p id="category">{product.category}</p>
          <h1 id="title">{product.name}</h1>
          <h2 id="rating">{`${averageRating} stars. Read all ${totalRatings} review(s)`}</h2>
          <div className="saleOutlay">
            <h3 id="nonPrice">{'$' + currentStyle.original_price}</h3>
            <h3 id="salesPrice">{currentStyle.sales_price}</h3>
          </div>
          <p id="overview">{product.description}</p>
          <button id="Facebook" type="button">Facebook</button>
          <button id="Twitter" type="button">Twitter</button>
          <button id="Pinterest" type="button">Pinterest</button>
        </div>
      );
    }
    console.log('2');
    return (
      <div className="productDetails">
        <p id="category">{product.category}</p>
        <h1 id="title">{product.name}</h1>
        <h2 id="rating">{`${averageRating} stars. Read all ${totalRatings} review(s)`}</h2>
        <h3 id="price">{'$' + currentStyle.original_price}</h3>
        <p id="overview">{product.description}</p>
        <button id="Facebook" type="button">Facebook</button>
        <button id="Twitter" type="button">Twitter</button>
        <button id="Pinterest" type="button">Pinterest</button>
      </div>
    );
  }

  if (currentStyle.sales_price) {
    console.log('3');
    return (
      <div className="productDetails">
        <p id="category">{product.category}</p>
        <h1 id="title">{product.name}</h1>
        <div className="saleOutlay">
          <h3 id="nonPrice">{'$' + currentStyle.original_price}</h3>
          <h3 id="salesPrice">{currentStyle.sales_price}</h3>
        </div>
        <p id="overview">{product.description}</p>
        <button id="Facebook" type="button">Facebook</button>
        <button id="Twitter" type="button">Twitter</button>
        <button id="Pinterest" type="button">Pinterest</button>
      </div>
    );
  }

  return (
    <div className="productDetails">
      <p id="category">{product.category}</p>
      <h1 id="title">{product.name}</h1>
      <h3 id="price">{'$' + currentStyle.original_price}</h3>
      <p id="overview">{product.description}</p>
      <button id="Facebook" type="button">Facebook</button>
      <button id="Twitter" type="button">Twitter</button>
      <button id="Pinterest" type="button">Pinterest</button>
    </div>
  );
}

export default ProductDetails;
