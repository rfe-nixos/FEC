import React from 'react';
import styled from 'styled-components';

function BotBar() {
  return (
    <TitleDiv>
      <TitleInner
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        © 2022 NIX ATELIER
      </TitleInner>
    </TitleDiv>
  );
}

const TitleInner = styled.div`
  font-size: 10px;
  letter-spacing: 5px;
  margin-right: 0%;
  &:hover{
    cursor: pointer;
    opacity: 60%;
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  max-height: 5%;
  font-weight: 200;
  padding: 2%;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 2%;
  margin-top: 1%;
`;

export default BotBar;
