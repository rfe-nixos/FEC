import React from 'react';
import { FaStar } from 'react-icons/fa';
import { StyledCard } from './styles/list.styled.js';
function Product({ formattedCard }) {
  return (
    <StyledCard>
      <div className="cardHeader">
      <FaStar className="relatedAction" />
        <img
          src={formattedCard.image}
          className="cardImage"
          alt={formattedCard.description}
        />
        <button class="btn btnLeft" type="button">
          &#8656;
        </button>
        <button class="btn btnRight" type="button">
          &#8658;
        </button>
      </div>
      <div className="cardBody">
        <h1 className="cardCategory">{formattedCard.category}</h1>
        <p className="cardName">{formattedCard.name}</p>
        <p className="cardPrice">{formattedCard.price}</p>
        <p className="discountedCardPrice">{formattedCard.discountedPrice}</p>
        {/* TODO: Rating needs to be updated to show starts up to 1/4  */}
        <p className="cardRating">{formattedCard.rating}</p>
      </div>
    </StyledCard>
  );
}

export default Product;
