import React from 'react';
import styled from 'styled-components';

function PhotoTile({ photo, value, onDelete }) {
  const handleClick = (event) => {
    event.preventDefault();
    onDelete(event.target.id.slice(4));
  };
  return (
      <StyledImg src={photo} id={`img-${value}`} onClick={handleClick} />
  );
}

const StyledImg = styled.img`
  max-height: 48px;
  scale: auto;
  border: 1px solid #d9d9d9;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
  margin: 2%;
  margin-left: 0%;
`;

export default PhotoTile;
