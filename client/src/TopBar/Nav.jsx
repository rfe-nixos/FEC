import React, { useState } from 'react';
import styled from 'styled-components';

function Nav({ ratingsRef, qaRef }) {
  console.log(ratingsRef);
  const [showNav, setShowNav] = useState(false);

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

  return (
    <NavMain>
      <NavTop id="nav-top" onClick={toggleNav}>
        <Name>NAV</Name>
      </NavTop>
      <NavBot showNav={showNav} id="nav-bot">
        <Name>PRODUCT</Name>
        <Name>RELATED ITEMS</Name>
        <Name onClick={scrollToQa}>Q + A</Name>
        <Name onClick={scrollDown}>RATINGS REVIEWS</Name>
      </NavBot>
    </NavMain>
  );
}

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
`

const NavBot = styled.div`
  position: absolute;
  transform: translate(0%, 24px);
  width: 200px;
  height: ${props => props.showNav ? '100' : '0'}px;
  overflow-y: hidden;
  transition: .5s;
  display:flex;
  flex-direction: column;
  background-color: white;
  padding: 2%;
  align-items: flex-start;
  border: ${props => props.showNav ? '.5' : '0'}px solid black;
`;

export default Nav;