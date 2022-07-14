import React from 'react';
import styled from 'styled-components';
import ImageInput from './ImageInput';

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

function FormInput({ label, type, name, placeholder, mandatory, value, onChange, extra, setImages }) {
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
        {mandatory && '*'}
      </Label>
      {type === 'textarea' && textarea}
      {type === 'file' && <ImageInput name={name} setImageForm={setImages} />}
      {type !== 'textarea' && type !== 'file' && input}
      {extra
        && <div className="extra">{`*${extra}`}</div>}
    </Div>
  );
}

export default FormInput;
