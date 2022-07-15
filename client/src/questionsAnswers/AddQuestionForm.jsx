import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

const PopupForm = styled.form`
  flex-direction: column;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  position: fixed;
  background-color: #fefefe;
  left: 25%;
  top: 10%;
  justify-content: center;
  display: none;
`;

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

const Invalid = styled.ul`
  color: red;
`;

function AddQuestionForm({ questionId, submitHandler, productName }) {
  const [isFormValid, setIsFormValid] = useState(true);
  const [emptyFields, setEmptyFields] = useState();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [formValue, setFormValue] = useState({});

  const onChange = (e) => {
    // update the formvalue on the name of the input
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const inputs = [
    [
      {
        label: 'Your Question',
        type: 'textarea',
        name: 'body',
        value: formValue.body || '',
        placeholder: '',
        mandatory: 'true',
        maxLength: 1000,
        onChange,
      },
      'For privacy reasons, do not use your full name or email address',
    ],
    [
      {
        label: 'What is your nickname',
        type: 'username',
        name: 'name',
        value: formValue.name || '',
        placeholder: 'Example: jackson11!',
        mandatory: 'true',
        maxLength: 60,
        onChange,
      },
      'For authentication reasons, you will not be emailed'
    ],
    [
      {
        label: 'Your email',
        type: 'email',
        name: 'email',
        value: formValue.email || '',
        placeholder: 'Example: jack@email.com',
        mandatory: 'true',
        maxLength: 60,
        onChange,
      },
    ],
  ];

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // TODO

  const validateForm = () => {
    let result = true;
    const invalid = [];
    inputs.forEach((form) => {
      const target = form[0].name;
      if (Boolean(form[0].mandatory) && !formValue[target]) {
        if (target === 'body') {
          invalid.push('Question');
        }
        if (target === 'name') {
          invalid.push('Username');
        }
        if (target === 'email') {
          invalid.push('Email');
        }
        result = false;
      }
      if (form[0].type === 'email' && !validateEmail(formValue[form[0].name])) {
        setIsEmailValid(false);
        result = false;
      }
    });
    setEmptyFields(invalid);
    setIsFormValid(result);
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmptyFields([]);
    if (validateForm()) {
      submitHandler(formValue);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setFormValue({});
    setEmptyFields([]);
    setIsEmailValid(true);
    setIsFormValid(true);
    document.getElementById(`${questionId}-popup`).style.display = 'none';
  };

  return (
    <PopupForm id={`${questionId}-popup`}>
      <Title>Ask Your Question</Title>
      <Subtitle>{'About the ' + productName}</Subtitle>
      {!isFormValid
      && (
      <Invalid>
        {Boolean(emptyFields.length)
        && (
          <li>
            You must enter the following:
            <ul>
              {emptyFields.map((field) => <li>{field}</li>)}
            </ul>
          </li>
        )}
        {!isEmailValid
        && (
          <li>
            Email is invalid.
          </li>
        )}
      </Invalid>
      )}

      {inputs.map((form) => (
        <FormInput
          key={form[0].name}
          attribute={form[0]}
          comment={form[1]}
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
    </PopupForm>
  );
}

export default AddQuestionForm;
