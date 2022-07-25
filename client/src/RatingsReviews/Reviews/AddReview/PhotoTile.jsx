import React from 'react';
import styled from 'styled-components';

function PhotoTile({ photo, value, onDelete }) {
  const handleClick = (event) => {
    event.preventDefault();
    onDelete(event.target.id.slice(4));
  };
  return (
    <Div>
      <StyledImg src={photo} id={`img-${value}`} />
      <Remove onClick={handleClick}>X</Remove>
    </Div>
  );
}

const Div = styled.div`
  height: 60px;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Remove = styled.button`
  font-size: 10px;
  width: 50%;
  background: white;
  border: .5px solid black;
  padding: 1%;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const StyledImg = styled.img`
  max-height: 48px;
  scale: auto;
  border: 1px solid #d9d9d9;
  margin: 2%;
  margin-left: 0%;
`;

export default PhotoTile;
