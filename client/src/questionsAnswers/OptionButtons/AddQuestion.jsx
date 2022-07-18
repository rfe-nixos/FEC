import React, { useState } from 'react';
import { postQuestion } from '../lib/api/githubAPI';
import AddQuestionForm from './AddQuestionForm';

function AddQuestion({ id, renderQuestions, Button, productName }) {
  const [showModal, setShowModal] = useState(false);
  const addQuestion = (formValues) => {
    postQuestion(id, formValues)
      .then(() => {
        renderQuestions();
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
