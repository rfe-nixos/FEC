/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function ProductDetails(style) {
  const starRating = style.props.rating;

  if (style.props.reviewNum > 0) {
    return (
      <div className="productDetails">
        <p id="category">{style.props.category}</p>
        <h1 id="title">{style.props.title}</h1>
        <h2 id="rating">{`${starRating} stars. Read all ${style.props.reviewNum} review(s)`}</h2>
        <h2 id="price">{style.props.price}</h2>
        <p id="overview">{style.props.overview}</p>
        <button id="Facebook" type="button">Facebook</button>
        <button id="Twitter" type="button">Twitter</button>
        <button id="Pinterest" type="button">Pinterest</button>
      </div>
    );
  }
  return (
    <div className="productDetails">
      <p id="category">{style.props.category}</p>
      <h1 id="title">{style.props.title}</h1>
      <h2 id="price">{style.props.price}</h2>
      <p id="overview">{style.props.overview}</p>
      <button id="Facebook" type="button">Facebook</button>
      <button id="Twitter" type="button">Twitter</button>
      <button id="Pinterest" type="button">Pinterest</button>
    </div>
  );
}

export default ProductDetails;
