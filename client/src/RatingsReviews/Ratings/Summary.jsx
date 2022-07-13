import React from 'react';
import starRating from '../lib/starRatings.js';
import Stars from './Stars.jsx';
import styled from 'styled-components';

function Summary({ average, totalRatings, isLoaded }) {
  return (
    <div>
      {!isLoaded && <h4>loading. . .</h4>}
      {(isLoaded)
        && (
        <div>
          <StyledSummary>
            <BigRating>{`${average}`}</BigRating>
            <Stars average={average} percentage={starRating(average)} />
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
`

const StyledSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;

`

const SumContainer = styled.div`

`

export default Summary;
