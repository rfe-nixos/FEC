import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ratingToPercentage from '../lib/ratingToPercentage.js';

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
  border: ${props => props.isClicked ? '1px solid black' : 'none'};
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

function Bar(props) {
  const [isClicked, setIsClicked] = useState(false);

  const setRatingFilter = () => {
    // console.log('clicked bar, should set rating filter');
    props.setRatingFilter(props.star);
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  };

  useEffect(() => {
    console.log('isClicked is toggled, need to adjust display');

  }, [isClicked]);

  const checkRatingFilter = () => {
    if(props.ratingFilter.indexOf(props.star)) {
      console.log('yo i ');
    }
  }

  return (
    <BarContainer>
      <StarCount>{props.star}</StarCount>
      <OuterBar id={'bar-' + props.star} isClicked={isClicked} onClick={setRatingFilter}><InnerBar width={props.percentage} /></OuterBar>
    </BarContainer>
  );
}

const StarCount = styled.div`
  border-bottom: .5px solid black;
  /* &:hover{
    opacity:70%;
    cursor: pointer;
  } */
`;

export default Bar;
