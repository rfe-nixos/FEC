import React from 'react';
import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
`
const StyledInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  width: 90%;
  border-top: 1px solid black;
  padding-top: 1%;
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2%;
  font-size: small;
  font-weight: 400;

`

function RatingsReviews() {
  return (
    <StyledMain>
      <StyledTitle>RATINGS + REVIEWS</StyledTitle>
      <StyledInner>
        <Ratings />
        <Reviews />
      </StyledInner>
    </StyledMain>
  );
}

export default RatingsReviews;
