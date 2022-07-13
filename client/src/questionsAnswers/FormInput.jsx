import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Div = styled.div`
  padding: 5px 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
`;

const Input = styled.input`
  width: 50%;
`;

function FormInput({ label, type, name, placeholder, value, onChange, extra }) {
  const textarea = (
    <Textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

  const input = (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

  return (
    <Div className="form-input">
      <Label>
        {label}
      </Label>
      {type === 'textarea' && textarea}
      {type !== 'textarea' && input}
      {extra
        && <div className="extra">{`*${extra}`}</div>}
    </Div>
  );
}

export default FormInput;
