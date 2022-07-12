import React from 'react';
import axios from 'axios';
import config from '../../../config';
import PopupForm from './PopupForm';

const { API_KEY, API_URL } = config;

function AddQuestion({ id, renderQuestions, DivContainer }) {
  const formConfig = [
    {
      label: 'Your Question',
      type: 'textarea',
      name: 'body',
      value: '',
      placeholder: '',
      mandatory: true,
    },
    {
      label: 'What is your nickname',
      type: 'username',
      name: 'name',
      value: '',
      placeholder: 'Example: jackson11!',
      extra: 'For privacy reasons, do not use your full name or email address',
      mandatory: true,
    },
    {
      label: 'Your email',
      type: 'email',
      name: 'email',
      value: '',
      placeholder: 'Example: jack@email.com',
      extra: 'For authentication reasons, you will not be emailed',
      mandatory: true,
    },
  ];

  const addQuestion = (formValues) => {
    // get the form data and
    const { body, name, email } = formValues;
    axios.post(`${API_URL}/qa/questions`, { body, name, email, product_id: id }, { headers: { Authorization: API_KEY } })
      .then((result) => {
        console.log('successfully posted question');
        renderQuestions();
      })
      .catch((err) => {
        console.log('error posting question', err);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(`${id}-popup`).style.display = 'flex';
  };

  return (
    <DivContainer id="add-question-btn">
      <button type="submit" onClick={handleClick}>
        Add Question
      </button>
      { /* DEFAULT HIDDEN POPUP FORM FOR QUESTION */ }
      <PopupForm id={id} config={formConfig} submitHandler={addQuestion} />
    </DivContainer>
  );
}

export default AddQuestion;
