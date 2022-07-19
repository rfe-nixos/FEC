import React, { useState } from 'react';
import styled from 'styled-components';

export default function Image({ url }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <StyledImg
        src={url}
        onClick={() => setClicked(true)}
      />
      {clicked
      && (
      <ModalOverlay>
        <CloseButton onClick={() => setClicked(false)}>X</CloseButton>
        <ModalImg src={url} />
      </ModalOverlay>
      )}
    </>
  );
}

const StyledImg = styled.img`
  max-height: 100px;
  margin: 0 1px;
  scale: auto;
  border: 1px solid #d9d9d9;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const ModalImg = styled.img`
  border: 1px solid #d9d9d9;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background-color: rgba(0,0,0,.7);
`;

const CloseButton = styled.button`
  float: right;
  font-size: 20px;
`;