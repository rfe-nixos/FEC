import React from 'react';
import { StyledCard } from './styles/list.styled.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

function Product({ formattedCard }) {
  return (
    <StyledCard>
      <h1 className="cardCategory">{formattedCard.category}</h1>
      <div className="relatedAction">⭐️</div>
      <img
        src={formattedCard.image}
        className="cardImage"
        alt={formattedCard.description}
      />
      <p className="cardName">{formattedCard.name}</p>
      <p className="cardPrice">{formattedCard.price}</p>
      <p className="discountedCardPrice">{formattedCard.discountedPrice}</p>
      {/* TODO: Rating needs to be updated to show starts up to 1/4  */}
      <p className="cardRating">{formattedCard.rating}</p>
    </StyledCard>
  );
}

export default Product;
