import React from 'react';

function ProductDetails(title, category, rating, price, overview, reviewNum) {
  const starRating = rating;

  if (reviewNum > 0) {
    return (
      <div>
        <p id="category">{category}</p>
        <h1 id="title">{title}</h1>
        <h2 id="rating">{`${starRating} Read all ${reviewNum} reviews`}</h2>
        <h2 id="price">{price}</h2>
        <p id="overview">{overview}</p>
        <button id="Facebook" type="button">Facebook</button>
        <button id="Twitter" type="button">Twitter</button>
        <button id="Pinterest" type="button">Pinterest</button>
      </div>
    );
  }
  return (
    <div>
      <p id="category">{category}</p>
      <h1 id="title">{title}</h1>
      <h2 id="price">{price}</h2>
      <p id="overview">{overview}</p>
      <button id="Facebook" type="button">Facebook</button>
      <button id="Twitter" type="button">Twitter</button>
      <button id="Pinterest" type="button">Pinterest</button>
    </div>
  );
}

export default ProductDetails;
