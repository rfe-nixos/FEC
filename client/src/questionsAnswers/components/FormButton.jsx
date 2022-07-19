import React from 'react';
import styled from 'styled-components';

export default function FormButton({ handleSubmit = () => {}, handleClose }) {
  return (
    <DivButton className="form-buttons">
      <ButtonStyled type="submit" onClick={handleSubmit} data-testid="form-button-test">
        Submit
      </ButtonStyled>
      <ButtonStyled onClick={handleClose}>
        Close
      </ButtonStyled>
    </DivButton>
  );
}

const ButtonStyled = styled.button`
  padding: 2px;
  width: 30%;
  margin: 20px 0;
  border-radius: 1px;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
