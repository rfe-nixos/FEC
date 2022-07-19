import React from 'react';
import styled from 'styled-components';
import Char from './Char.jsx';
import ratingToPercentage from '../lib/ratingToPercentage';

function CharBar({ rating, char, chars }) {
  return (
    <BarContainer>
      <StarCount>{char}: </StarCount>
      <OuterBar>
        <InnerBar width={ratingToPercentage(rating)}>
        </InnerBar>
      </OuterBar>
      <CharList>
        {chars.map((c, index) => {
          return <Char char={c} key={index}/>
        })}
      </CharList>
    </BarContainer>
  );
}

const BarContainer = styled.div`
  font-size: xx-small;
  margin-top: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OuterBar = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #d9d9d9;
  &:hover{
    opacity:70%;
    cursor: pointer;
  }
`;

const InnerBar = styled.div`
  position: absolute;
  top: 56%;
  left: ${props => props.width};
  white-space: nowrap;
  overflow: hidden;
  width: auto;
  height: 24px;
  font-size:small;
  transform: translate(-50%, -50%);
  &:before {
    content: "▼";
  }
`;

const CharList = styled.div`
  font-size: xxx  -small;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StarCount = styled.div`

`

export default CharBar;