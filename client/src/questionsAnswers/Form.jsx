import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonStyled = styled.button`
  padding: 2px;
  width: 30%;
  margin: 20px 0;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  margin: 10px 0;
  text-align: center;
`;

const Subtitle = styled.h3`
  margin: 10px 0;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
  text-align: center;
`;

function Form({ formConfig = [], id, title, subtitle, submitHandler }) {
  const [formValue, setFormValue] = useState({});
  const onChange = (e) => {
    // update the formvalue on the name of the input
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const setImages = (imageValues) => {
    setFormValue({
      ...formValue,
      photos: imageValues,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(formValue);
  };

  const handleClose = (e) => {
    e.preventDefault();
    document.getElementById(`${id}-popup`).style.display = 'none';
  };

  return (
    <FormStyled>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {formConfig.map((config) => (
        <FormInput
          key={config.name}
          label={config.label}
          type={config.type}
          name={config.name}
          placeholder={config.placeholder}
          value={formValue.value}
          mandatory={config.mandatory}
          extra={config.extra || ''}
          onChange={onChange}
          other={config.other}
          setImages={setImages}
        />
      ))}
      <DivButton className="form-buttons">
        <ButtonStyled type="submit" onClick={handleSubmit} data-testid="form-button-test">
          Submit
        </ButtonStyled>
        <ButtonStyled onClick={handleClose}>
          Close
        </ButtonStyled>
      </DivButton>
    </FormStyled>
  );
}

export default Form;
