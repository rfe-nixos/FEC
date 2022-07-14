import React from 'react';
import { useState, useEffect } from 'react';
import Product from './product.jsx';
import { StyledList } from './styles/list.styled.js';

function ProductList({
  relatedProductStyles,
  relatedProduct_ids,
  relatedProductReviews,
}) {
  // Combine states using obj to organize by product ID
  const cardFormatter = (reviews, ids, styles) => {
    const formattedCards = [];
    for (let i = 0; i < ids.length; i++) {
      const reviewTotal = reviews[i].results.reduce(
        (total, item) => total + parseInt(item.rating, 10),
        0
      );
      const reviewAvg = reviewTotal / (reviews[i].results.length - 1);
      const formattedCard = {
        id: styles[i].product_id || null,
        image: styles[i].results[0].photos[0].thumbnail_url || 'https://ngca.net/wp-content/uploads/2020/09/image-coming-soon-placeholder.png',
        category: ids[i].category || null,
        name: ids[i].name || null,
        price: styles[i].results[0].original_price || null,
        discountedPrice: styles[i].results[0].sale_price || null,
        rating: reviewAvg,
        description: ids[i].description || null,
        features: ids[i].features || null,
      };
      formattedCards.push(
        <Product
          formattedCard={formattedCard}
          id={formattedCard.id}
          key={formattedCard.id}
        />
      );
    }
    return formattedCards;
  };
  let product;
  if (
    !!relatedProductReviews &&
    !!relatedProduct_ids &&
    !!relatedProductStyles
  ) {
    product = cardFormatter(
      relatedProductReviews,
      relatedProduct_ids,
      relatedProductStyles
    );
  } else {
    product = <p>ERROR 404</p>;
  }
  return <StyledList>{product}</StyledList>;
}

export default ProductList;
