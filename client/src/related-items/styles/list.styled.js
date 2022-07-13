import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: solid;
  border-color: black;
  overflow: hidden;
  img {
    display:block;
    width: 100%
    max-height:200px;
    object-fit: cover;
    object-position:center;
  }
  border-radius: 8px;
  max-height: 200px;
  margin: 1rem;
`;
