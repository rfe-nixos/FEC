import React from 'react';
import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`
const StyledInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  width: 80%;
  border-top: 2px solid black;
`

function RatingsReviews() {
  return (
    <StyledMain >
      <h2>RATINGS / REVIEWS</h2>
      <StyledInner>
        <Ratings />
        <Reviews />
      </StyledInner>
    </StyledMain>
  );
}

export default RatingsReviews;
