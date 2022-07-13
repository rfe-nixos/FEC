import React from 'react';
import axios from 'axios';
import PopupForm from './PopupForm';

function AddQuestion({ id, renderQuestions, Button }) {
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
    const { body, name, email } = formValues;
    const url = `${process.env.API_URL}/qa/questions`;
    const requestBody = {
      body,
      name,
      email,
      product_id: id,
    };
    const headers = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios
      .post(url, requestBody, headers)
      .then(() => {
        console.log('axios request is made inside addquestion');
        document.getElementById(`${id}-popup`).style.display = 'none';
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
    <div id="add-question-btn">
      <Button type="submit" onClick={handleClick} data-testid='add-question-btn'>
        ADD A QUESTION +
      </Button>
      { /* DEFAULT HIDDEN POPUP FORM FOR QUESTION */ }
      <PopupForm id={id} config={formConfig} submitHandler={addQuestion} header="Add a Question" />
    </div>
  );
}

export default AddQuestion;
