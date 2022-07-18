import React from 'react';
import styled from 'styled-components';

function BotBar() {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <TitleDiv>
      <TitleInner onClick={refresh}>© 2022 NIX ATELIER</TitleInner>
    </TitleDiv>
  )
}

const Link = styled.a`
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { cursor: pointer; opacity: 60%;}
  &:active { text-decoration: none; }
  margin-right: 5%;
`;

const TitleImg = styled.img`
  max-height: 20px;
  size: auto;
  align-self: center;
  transform: translate(-50%, 0%);
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

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