import React from 'react';
import styled from 'styled-components';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Summary from './Summary.jsx';

function Ratings(props) {
  return (
    <RatingsContainer id="ratings-main">
      <Summary
        meta={props.meta}
        average={props.average}
        totalRatings={props.totalRatings}
        isLoaded={props.isLoaded}
      />
      <Breakdown
        meta={props.meta}
        isLoaded={props.isLoaded}
        totalRatings={props.totalRatings}
        setRatingFilter={props.setRatingFilter}
        ratingFilter={props.ratingFilter}
      />
      <Characteristics
        meta={props.meta}
        isLoaded={props.isLoaded}
      />
    </RatingsContainer>
  );
}

const RatingsContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 1%;
  margin-top: -1%;
  width: 40%;
`;

export default Ratings;
