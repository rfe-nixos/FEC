import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../lib/FormInput';
import FormButton from '../lib/FormButton';
import InvalidError from '../lib/InvalidError';

function AddQuestionForm({ show, setShowModal, questionId, submitHandler, productName }) {
  if (!show) return null;
  const [isFormValid, setIsFormValid] = useState(true);
  const [emptyFields, setEmptyFields] = useState();
  const [invalidMessage, setInvalidMessage] = useState([]);
  const [formValue, setFormValue] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const inputs = [
    {
      config: {
        label: 'Your Question',
        type: 'textarea',
        name: 'body',
        value: formValue.body || '',
        placeholder: '',
        mandatory: 'true',
        maxLength: 1000,
        onChange,
      },
      comment: 'For privacy reasons, do not use your full name or email address',
      changeHandler: onChange,
    },
    {
      config: {
        label: 'What is your nickname',
        type: 'username',
        name: 'name',
        value: formValue.name || '',
        placeholder: 'Example: jackson11!',
        mandatory: 'true',
        maxLength: 60,
        onChange,
      },
      comment: 'For authentication reasons, you will not be emailed',
      changeHandler: onChange
    },
    {
      config: {
        label: 'Your email',
        type: 'email',
        name: 'email',
        value: formValue.email || '',
        placeholder: 'Example: jack@email.com',
        mandatory: 'true',
        maxLength: 60,
        onChange,
      },
      changeHandler: onChange,
    },
  ];

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    let result = true;
    const invalid = [];
    inputs.forEach(({ config }) => {
      const target = config.name;
      if (Boolean(config.mandatory) && !formValue[target]) {
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
      if (config.type === 'email' && !validateEmail(formValue[config.name])) {
        setInvalidMessage([
          'Email is invalid.',
        ]);
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
      setShowModal(false);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setFormValue({});
    setEmptyFields([]);
    setIsFormValid(true);
    setShowModal(false);
  };

  return (
    <Modal>
      <PopupForm id={`${questionId}-popup`}>
        <Header>
          <Title>Ask Your Question</Title>
          <Subtitle>{'About the ' + productName}</Subtitle>
        </Header>
        {!isFormValid
        && (
        <InvalidError
          emptyFields={emptyFields}
          invalidMessage={invalidMessage}
        />
        )}

        {inputs.map(({config, comment, changeHandler}) => (
          <div key={config.name}>
            <FormInput
              attribute={config}
              changeHandler={changeHandler}
            />
            {comment && `*${comment}`}
          </div>
        ))}
        <FormButton
          handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
      </PopupForm>
    </Modal>
  );
}

export default AddQuestionForm;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 9998;
  transition: all .3s ease;
  background-color: rgba(0,0,0,.7);
  overflow: auto;
`;

const PopupForm = styled.form`
  position: relative;
  max-width: 51.0714285714rem;
  width: 60%;
  margin: 5vh auto;
  padding: 1.7142857143rem 1.1428571429rem;
  background-color: #fff;
  border-radius: .2857142857rem;
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

const Header = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 1.5rem;
  padding: 10px 0;
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  padding: 2px 0;
`;


const Invalid = styled.ul`
  color: red;
`;

const PaddedDiv = styled.div`
  padding: 10px;
  margin: 10px;
`;
