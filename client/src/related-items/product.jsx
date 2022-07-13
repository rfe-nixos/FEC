import React from 'react';


function Product({ formattedCard }) {
  return (
    <>
      <h1 className="cardCategory">{formattedCard.category}</h1>
      <img src={formattedCard.image} className="cardImage" alt={formattedCard.description}/>
      <p className="cardName">{formattedCard.name}</p>
      <p className="cardPrice">{formattedCard.price}</p>
      <p className="discountedCardPrice">{formattedCard.discountedPrice}</p>
      {/* TODO: Rating needs to be updated to show starts up to 1/4  */}
      <p className="cardRating">{formattedCard.rating}</p>

    </>
  );
}

export default Product;
