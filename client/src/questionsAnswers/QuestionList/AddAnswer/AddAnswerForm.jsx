import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import ImageInput from './ImageInput';
import InvalidError from '../../components/InvalidError';

function AddAnswerForm({ show, setShowModal, question, submitHandler, productName }) {
  if (!show) return null;
  const questionId = question.question_id;
  const questionBody = question.question_body;
  const [isFormValid, setIsFormValid] = useState(true);
  const [emptyFields, setEmptyFields] = useState();
  const [invalidMessage, setInvalidMessage] = useState([]);
  const [formValue, setFormValue] = useState({});

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const inputs = [
    {
      config: {
        label: 'Your Answer',
        type: 'textarea',
        name: 'body',
        value: formValue.body,
        placeholder: '',
        maxLength: 1000,
        mandatory: true,
      },
      changeHandler: inputChangeHandler,
    },
    {
      config: {
        label: 'What is your nickname',
        type: 'text',
        name: 'name',
        value: formValue.name,
        placeholder: 'Example: jack543!',
        maxLength: 60,
        mandatory: true,
      },
      comment: 'For privacy reasons, do not use your full name or email address',
      changeHandler: inputChangeHandler,
    },
    {
      config: {
        label: 'Your email',
        type: 'email',
        name: 'email',
        value: formValue.email,
        placeholder: 'Example: jack@email.com',
        maxLength: 60,
        mandatory: true,
      },
      comment: 'For authentication reasons, you will not be emailed',
      changeHandler: inputChangeHandler,
    },
  ];

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    let result = true;
    const invalid = [];
    const newInvalidMessage = [];
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
        newInvalidMessage.push('Email is invalid.');
        result = false;
      }
    });
    setInvalidMessage(newInvalidMessage);
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
          <Title>Submit your Answer</Title>
          <Subtitle>{`${productName}:`}</Subtitle>
          <Subtitle>{questionBody}</Subtitle>
        </Header>
        {!isFormValid
        && (
        <InvalidError
          emptyFields={emptyFields}
          invalidMessage={invalidMessage}
        />
        )}
        {inputs.map(({ config, comment, changeHandler }) => (
          <div key={config.label}>
            <FormInput
              attribute={config}
              changeHandler={changeHandler}
            />
            {comment && `*${comment}`}
          </div>
        ))}
        <ImageInput
          formValue={formValue}
          setFormValue={setFormValue}
        />
        <FormButton
          handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
      </PopupForm>
    </Modal>
  );
}

export default AddAnswerForm;

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