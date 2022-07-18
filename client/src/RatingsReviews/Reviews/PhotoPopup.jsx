import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: auto;
  padding: 1.5%;
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid black;
  font-size:small;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

const StyledButton = styled.button`
  width: auto;
  max-width: 100px;
  font-size: small;
  margin: 2%;
  padding: 0.25em 1em;
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const StyledImg = styled.img`
  size: auto;
  max-width: 80%;
`;

function PhotoPopup({ photoUrl, togglePhotoPop }) {
  const handleClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'photopop') {
      togglePhotoPop(e);
    }
  };

  return (
    <StyledForm onClick={handleClick} id="photopop">
      <StyledInner id="photopop-inner">
        <StyledImg src={photoUrl} />
        <StyledButton onClick={togglePhotoPop}>CLOSE</StyledButton>
      </StyledInner>
    </StyledForm>
  );
}

export default PhotoPopup;
