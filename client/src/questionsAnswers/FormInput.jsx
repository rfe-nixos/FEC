import React from 'react';
import styled from 'styled-components';

function FormInput({ attribute, changeHandler }) {
  return (
      <Label>
        <div>
          {attribute.label}
          {attribute.mandatory && <span style={{ 'font-size': '0.8rem', display: 'inline' }}> *</span>}
        </div>
        {attribute.type === 'textarea'
        && (
          <Textarea
            onChange={changeHandler}
            {...attribute}
          />
        )}
        {attribute.type !== 'textarea'
        && (
          <Input
          onChange={changeHandler}
            {...attribute}
          />
        )}
      </Label>
  );
}

export default FormInput;

const Label = styled.label`
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  padding-top: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
`;

const Input = styled.input`
  width: 50%;
  margin: 5px 0;
`;
