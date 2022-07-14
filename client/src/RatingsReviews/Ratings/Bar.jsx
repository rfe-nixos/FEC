import React from 'react';
import styled from 'styled-components';
import ratingToPercentage from '../lib/starRatings.js';

const BarContainer = styled.div`
  font-size: xx-small;
  margin-top: 3%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OuterBar = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #d9d9d9;
  margin-left: 5%;
  &:hover{
    opacity:70%;
    cursor: pointer;
  }
`;

const InnerBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  height: 10px;
  width: ${(props) => props.width}%;
  background-color: #1c1c1c;
`;

function Bar({ percentage, star }) {
  return (
    <BarContainer>
      <StarCount>{star}</StarCount>
      <OuterBar><InnerBar width={percentage} /></OuterBar>
    </BarContainer>
  );
}

const StarCount = styled.div`
  border-bottom: .5px solid black;
  &:hover{
    opacity:70%;
    cursor: pointer;
  }
`;

export default Bar;
