/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Star from '../RatingsReviews/Ratings/Star';

function ProductDetails({ product, currentStyle, productReviews, ratingsRef }) {
  if (Object.keys(productReviews.ratings).length > 0) {
    const [showNav, setShowNav] = useState(false);

    /* const toggleNav = () => {
      !showNav ? setShowNav(true) : setShowNav(false);
    };

    const scrollDown = () => {
      console.log('ratings!');
      window.scrollTo({
        top: ratingsRef.current.offsetTop, // scrolls to location of ref
        behavior: 'smooth',
      });
      toggleNav();
    }; */
    let averageRating = 0;
    let totalRatings = 0;
    for (let i = 1; i <= 5; i += 1) {
      averageRating += parseInt(productReviews.ratings[i]) * i;
      totalRatings += parseInt(productReviews.ratings[i]);
    }

    averageRating /= totalRatings;
    averageRating = averageRating.toFixed(2);

    if (currentStyle.sales_price) {
      return (
        <div className="productDetails">
          <p id="category">{product.category}</p>
          <h1 id="title">{product.name}</h1>
          <div id="rating">
            <div className="starRating">
              <Star average={averageRating} />
            </div>
            <div /* onClick={scrollDown} */>
              <h3 className="totalRatings">Read all {totalRatings} review(s)</h3>
            </div>
          </div>
          <div className="saleOutlay">
            <h3 id="nonPrice">{'$' + currentStyle.original_price}</h3>
            <h3 id="salesPrice">{currentStyle.sales_price}</h3>
          </div>
          <p id="overview">{product.description}</p>
        </div>
      );
    }
    return (
      <div className="productDetails">
        <p id="category">{product.category}</p>
        <h1 id="title">{product.name}</h1>
        <div id="rating">
          <div className="starRating">
            <Star average={averageRating} />
          </div>
          <div /* onClick={scrollDown} */>
            <h3 className="totalRatings">Read all {totalRatings} review(s)</h3>
          </div>
        </div>
        <h3 id="price">{'$' + currentStyle.original_price}</h3>
        <p id="overview">{product.description}</p>
      </div>
    );
  }

  if (currentStyle.sales_price) {
    return (
      <div className="productDetails">
        <p id="category">{product.category}</p>
        <h1 id="title">{product.name}</h1>
        <div className="saleOutlay">
          <h3 id="nonPrice">{'$' + currentStyle.original_price}</h3>
          <h3 id="salesPrice">{currentStyle.sales_price}</h3>
        </div>
        <p id="overview">{product.description}</p>
      </div>
    );
  }

  return (
    <div className="productDetails">
      <p id="category">{product.category}</p>
      <h1 id="title">{product.name}</h1>
      <h3 id="price">{'$' + currentStyle.original_price}</h3>
      <p id="overview">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
