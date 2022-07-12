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

function Form({ formConfig = [], id, header, submitHandler }) {
  const [formValue, setFormValue] = useState(formConfig);

  const onChange = (e) => {
    // update the formvalue on the name of the input
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
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
      {header && <h2>{header}</h2>}
      {formConfig.map((config) => (
        <FormInput
          key={config.name}
          label={config.label}
          type={config.type}
          name={config.name}
          placeholder={config.placeholder}
          value={formValue.value}
          extra={config.extra || ''}
          onChange={onChange}
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
