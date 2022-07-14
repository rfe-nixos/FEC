import React from 'react';
import styled from 'styled-components';
import starRating from '../lib/starRatings.js';

const StarContainer = styled.div`
  font-size: small;
  margin-top: 3%;
`;

const OuterStar = styled.div`
  display: inline-block;
  position: relative;
  &:before {
    content: "☆☆☆☆☆";
  }
`;

const InnerStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => props.width};
  &:before {
    content: "★★★★★";
  }
`;

function Star({ average }) {
  return (
    <StarContainer>
      <OuterStar><InnerStar width={starRating(average)} /></OuterStar>
    </StarContainer>
  );
}

export default Star;
