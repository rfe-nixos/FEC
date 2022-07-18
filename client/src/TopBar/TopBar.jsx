import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SearchThing from './SearchThing.jsx';

function TopBar() {
  const [searching, setSearching] = useState(false);

  const refresh = () => {
    window.location.reload();
  };

  const toggleSearch = () => {
    !searching ? setSearching(true) : setSearching(false);
  };

  return (
    <TitleDiv id="top-bar">
      <TitleImg
        src="public/icons/nixatelier.png"
        alt="nixatelier"
        onClick={refresh}
      />
      <Link href="https://github.com/rfe-nixos/FEC" target="_blank" rel="noopener noreferrer">
        <TitleInner>ABOUT</TitleInner>
      </Link>
      <TitleInner onClick={toggleSearch}>SEARCH</TitleInner>
      {(searching) && (<SearchThing toggleSearch={toggleSearch} />)}
    </TitleDiv>
  );
};

const Link = styled.a`
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { cursor: pointer; opacity: 60%;}
  &:active { text-decoration: none; }
  margin-right: 5%;
`;

const TitleImg = styled.img`
  position: absolute;
  left: 50%;
  max-height: 50px;
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
  margin-right: 10%;
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
  justify-content: flex-end;
  max-height: 5%;
  font-weight: 200;
  padding: 2%;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 2%;
  margin-top: 1%;
`;

export default TopBar;

