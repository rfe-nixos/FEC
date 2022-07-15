import React from 'react';
import styled from 'styled-components';

function PhotoTile(props) {
  return(
    <StyledDiv>
      {props.photo.name}
      <StyledImg src={URL.createObjectURL(props.photo)}/>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: small;
  font-weight: medium;
  width: 100%;
  padding: 2%;
  margin: 1%;
  border: .5px solid #d9d9d9;
`

const StyledImg = styled.img`
  width: 48px;
  height: 48px;
  scale: auto;
  border: 1px solid #d9d9d9;
`

export default PhotoTile;