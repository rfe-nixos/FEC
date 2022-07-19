import React, {useState} from 'react';
import styled from 'styled-components';

function Nav(props) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    !showNav ? setShowNav(true) : setShowNav(false);
  }

  const scrollDown = () => {
    window.scrollTo({
      top: props.ratingsRef.current.offsetTop,
      behavior: 'smooth',
    });
    toggleNav();
  };

  return (
    <NavMain>
      <NavTop onClick={toggleNav}>
        <Name>NAV</Name>
      </NavTop>
      {(showNav)
        && (
          <NavBot>
            <Name>PRODUCT</Name>
            <Name>RELATED ITEMS</Name>
            <Name>Q + A</Name>
            <Name onClick={scrollDown}>RATINGS REVIEWS</Name>
          </NavBot>
        )}
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
  height: auto;
  display:flex;
  flex-direction: column;
  background-color: white;
  padding: 2%;
  align-items: flex-start;
  border: .5px solid black;
`

export default Nav;