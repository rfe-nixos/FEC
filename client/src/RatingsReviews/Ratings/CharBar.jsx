import React from 'react';
import starRating from '../lib/starRatings.js';
import styled from 'styled-components';

const BarContainer = styled.div`
  font-size: xx-small;
  margin-top: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const OuterBar = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #bdbdbd;
  &:hover{
    opacity:70%;
    cursor: pointer;
  }
`

const InnerBar = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.width};
  white-space: nowrap;
  overflow: hidden;
  width:auto;
  height: 20px;
  transform: translate(-50%, -50%);
  &:before {
    content: "★";
  }

`

function CharBar({ rating, char }) {
  return (
    <BarContainer>
      <StarCount>{char}: </StarCount>
      <OuterBar>
        <InnerBar width={starRating(rating)}>
        </InnerBar>
      </OuterBar>
    </BarContainer>
  );
}

const Pointer = styled.div`

`

const StarCount = styled.div`

`

export default CharBar;