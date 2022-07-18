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
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50%;
  padding: 1.5%;
  overflow-y: auto;
  background: #2d2d2d;
  border: 1px solid black;
  font-size:small;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

const StyledCat = styled.div`
  font-weight: bold;
  font-size: small;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-top: 1%;
  width: 100%;
`;

const StyledClose = styled.button`
  color: #1c1c1c;
  font-size: 15px;
  background-color: white;
  width: auto;
  font-weight: light;
  padding: .25em .5em;
  border-radius: 3px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;
const StyledButton = styled.button`
  width: auto;
  max-width: 100px;
  font-size: small;
  margin: 1%;
  margin-right: 3%;
  padding: 0.25em 1em;
  border-radius: 3px;
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
  max-width: 50%;
`

function PhotoPopup({ photoUrl, togglePhotoPop }) {

  return (
    <StyledForm>
      <StyledInner>
        <StyledImg src={photoUrl} />
        <StyledButton onClick={togglePhotoPop}>X</StyledButton>
      </StyledInner>
    </StyledForm>
  );

}

export default PhotoPopup;
