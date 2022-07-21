import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

function Nav({ ratingsRef, qaRef, pdRef }) {
  const [showNav, setShowNav] = useState(false);
  const navBotRef = useRef();

  const toggleNav = () => {
    !showNav ? setShowNav(true) : setShowNav(false);
  };

  const scrollDown = () => {
    window.scrollTo({
      top: ratingsRef.current.offsetTop, // scrolls to location of ref
      behavior: 'smooth',
    });
    toggleNav();
  };

  const scrollToQa = () => {
    window.scrollTo({
      top: qaRef.current.offsetTop, // scrolls to location of ref
      behavior: 'smooth',
    });
    toggleNav();
  };

  const scrollToPd = () => {
    window.scrollTo({
      top: pdRef.current.offsetTop, // scrolls to location of ref
      behavior: 'smooth',
    });
    toggleNav();
  };

  const handleOffClick = (event) => {
    if (!navBotRef.current.contains(event.target)
        || event.target !== navBotRef.current) {
      setShowNav(false);
    }
  };

  return (
    <NavMain>
      <NavTop id="nav-top" onClick={toggleNav}>
        <Name>NAV</Name>
      </NavTop>
      <NavBot showNav={showNav} id="nav-bot" ref={navBotRef}>
        <Name onClick={scrollToPd}>PRODUCT</Name>
        <Name>RELATED ITEMS</Name>
        <Name onClick={scrollToQa}>Q + A</Name>
        <Name onClick={scrollDown}>RATINGS REVIEWS</Name>
      </NavBot>
      {(showNav) && <NavBotBack onClick={handleOffClick} />}
    </NavMain>
  );
}

const NavBotBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const NavMain = styled.div`
  position: absolute;
  display:flex;
  flex-direction: column;
  font-size: 10px;
  letter-spacing: 5px;
  background: white;
  background-color: white;
  margin-left: 5%;
  height: 20px;
`;

const Name = styled.div`
  padding: 5px;
  margin-top: 1%;
  background-color: white;
  &:hover{
    cursor: pointer;
    opacity: 60%;
  }
`;

const NavTop = styled.div`
  width: 200px;
  display:flex;
  position: absolute;
  flex-direction: column;
  background-color: white;
  align-items: flex-start;
  padding: 2%;
`;

const NavBot = styled.div`
  position: absolute;
  z-index: 200;
  transform: translate(0%, 24px);
  width: 200px;
  height: ${(props) => (props.showNav ? '100' : '0')}px;
  overflow-y: hidden;
  transition: .5s;
  display:flex;
  flex-direction: column;
  background-color: white;
  padding: 2%;
  align-items: flex-start;
  border: ${(props) => (props.showNav ? '.5' : '0')}px solid black;
`;

export default Nav;
