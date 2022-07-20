import React from 'react';
import styled from 'styled-components';
import Star from './Star';

function Summary({ average, totalRatings, isLoaded }) {
  return (
    <div>
      {!isLoaded && <h4>loading. . .</h4>}
      {(isLoaded)
        && (
        <div>
          <StyledSummary>
            <BigRating data-testid="averagerating">{`${average}`}</BigRating>
            <Star average={average} />
          </StyledSummary>
          <div>
            <em>{`out of ${totalRatings} reviews`}</em>
          </div>
        </div>
        )}
    </div>
  );
}

const BigRating = styled.div`
  font-size: xxx-large;
  font-weight: bold;
  margin-right: 5%;
  margin-top:-5%;
  align-self: flex-start;
`;

const StyledSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: auto;
`;

export default Summary;
