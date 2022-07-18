import React, { useState } from 'react';
import axios from 'axios';
import AddQuestionForm from './AddQuestionForm';

function AddQuestion({ id, renderQuestions, Button, productName }) {
  const [showModal, setShowModal] = useState(false);
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
        renderQuestions();
      })
      .catch((err) => {
        console.log('error posting question', err);
      });
  };

  return (
    <div id="add-question-btn">
      <Button type="submit" onClick={() => setShowModal(true)} data-testid='add-question-btn'>
        ADD A QUESTION +
      </Button>
      <AddQuestionForm questionId={id} submitHandler={addQuestion} productName={productName} show={showModal} setShowModal={setShowModal}/>
    </div>
  );
}

export default AddQuestion;
