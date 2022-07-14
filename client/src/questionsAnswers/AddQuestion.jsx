import React from 'react';
import axios from 'axios';
import PopupForm from './PopupForm';

function AddQuestion({ id, renderQuestions, Button, productName }) {
  const formConfig = [
    {
      label: 'Your Question',
      type: 'textarea',
      name: 'body',
      value: '',
      placeholder: '',
      mandatory: true,
      maxLength: 1000,
    },
    {
      label: 'What is your nickname',
      type: 'username',
      name: 'name',
      value: '',
      placeholder: 'Example: jackson11!',
      extra: 'For privacy reasons, do not use your full name or email address',
      mandatory: true,
      maxLength: 60,
    },
    {
      label: 'Your email',
      type: 'email',
      name: 'email',
      value: '',
      placeholder: 'Example: jack@email.com',
      extra: 'For authentication reasons, you will not be emailed',
      mandatory: true,
      maxLength: 60,
    },
  ];

  const addQuestion = (formValues) => {
    const { body, name, email } = formValues;
    const requestConfig = {
      method: 'POST',
      url: `${process.env.API_URL}/qa/questions`,
      data: {
        body,
        name,
        email,
        product_id: id,
      },
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios(requestConfig)
      .then(() => {
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
      <PopupForm id={id} config={formConfig} submitHandler={addQuestion} title="Ask Your Question" subtitle={`About the ${productName}`} />
    </div>
  );
}

export default AddQuestion;
