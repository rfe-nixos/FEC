import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { StyledCard } from './styles/list.styled.js';
import Comparison from './comparison.jsx';
import {useCurrentProductUpdate} from '../context.jsx'

function Product({ formattedCard }) {
  // States
  const [picIndex, setPicIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const setCurrentProduct = useCurrentProductUpdate();
 // const [formattedCardState, setFormattedCard]= useState(formattedCard);
  const handleRightClick = () => {
    if (picIndex < formattedCard.image.length - 1) {
      setPicIndex((prev) => prev + 1);
    }
  };
  const handleLeftClick = () => {
    if (picIndex > 0) {
      setPicIndex((prev) => prev - 1);
    }
  };

  const handleGlobalStateClick = () => {
    setCurrentProduct(formattedCard.id);
  };
  return (
    <>
      <StyledCard onClick={handleGlobalStateClick}>
        <div className="cardHeader">
          <FaStar className="relatedAction" onClick={() => setOpenModal(true)} />
          <img
            src={
              formattedCard.image[picIndex].thumbnail_url ||
              'https://ngca.net/wp-content/uploads/2020/09/image-coming-soon-placeholder.png'
            }
            className="cardImage"
            alt={formattedCard.description}
          />
          <button
            className="btn btnLeft"
            type="button"
            onClick={handleLeftClick}
          >
            &#8656;
          </button>
          <button
            className="btn btnRight"
            type="button"
            onClick={handleRightClick}
          >
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

      {openModal && <Comparison closeModal={setOpenModal} />}
    </>
  );
}

export default Product;
