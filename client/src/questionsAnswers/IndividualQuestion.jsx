import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Answer from './Answer';
import Helpful from './Helpful';
import PopupForm from './PopupForm';
import config from '../../../config';

const { API_KEY, API_URL } = config;
const DivHelpful = styled.div`
  display: flex;
  width:30%;
  justify-content: space-around;
`;

const DivQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

const CollapseSpan = styled.span`
  font-weight: bold;
`;

function IndividualQuestion({ question, renderQuestions }) {
  const [collapsed, setCollapsed] = useState(true);
  const answerList = Object.values(question.answers).sort((a, b) => {
    if (a.helpfulness < b.helpfulness) return 1;
    if (a.helpfulness > b.helpfulness) return -1;
    return 0;
  });

  const mapAnswer = (answer) =>
    <Answer key={answer.id} answer={answer} renderQuestions={renderQuestions} />;

  const handleClick = (e) => {
    if (e.target.innerText === 'LOAD MORE ANSWERS') {
      // change state to false
      setCollapsed(false);
    } else if (e.target.innerText === 'COLLAPSE') {
      setCollapsed(true);
    } else if (e.target.innerText === 'Add Answer') {
      // display a popup form.
      // TODO LATER WHEN POPUP FORM IS CREATED
      document.getElementById(`${question.question_id}-popup`).style.display = 'flex';
    }
  };

  const formConfig = [
    {
      label: 'Your Answer',
      type: 'textarea',
      name: 'body',
      value: '',
      placeholder: '',
      mandatory: true,
    },
    {
      label: 'What is your nickname',
      type: 'text',
      name: 'name',
      value: '',
      placeholder: 'Example: jack543!',
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
    {
      label: 'Upload your photos',
      type: 'file',
      name: 'photos',
      value: [],
      placeholder: '',
    },
  ];

  const addAnswer = (formValues) => {
    const { body, name, email, photos } = formValues;
    axios.post(`${API_URL}/qa/questions/${question.question_id}/answers`, { body, name, email, photos }, { headers: { Authorization: API_KEY } })
      .then(() => {
        console.log('successfully posted answer');
        document.getElementById(`${question.question_id}-popup`).style.display = 'none';
        // rerender answers / question list
        renderQuestions();
      })
      .catch((err) => {
        console.log('failed posting answer.', err);
      });
  };

  return (
    <div className="individual-question">
      <DivQuestion className="question">
        <b>
          <span className="label">Q:</span>
          <span className="question-text">{question.question_body}</span>
        </b>
        <DivHelpful className="question-options">
          <Helpful id={question.question_id} type="question" currentCount={question.question_helpfulness} renderQuestions={renderQuestions} />
          {' | '}
          <u onClick={handleClick}>Add Answer</u>
        </DivHelpful>
      </DivQuestion>
      <div className="answers">
        <b>
          <span className="label">A:</span>
        </b>
        <div className="answer-list">
          {collapsed ? answerList.slice(0, 2).map(mapAnswer) : answerList.map(mapAnswer)}
          {collapsed && answerList.length > 2 && <CollapseSpan onClick={handleClick}>LOAD MORE ANSWERS</CollapseSpan>}
          {!collapsed && answerList.length > 2 && <CollapseSpan onClick={handleClick}>COLLAPSE</CollapseSpan>}
        </div>
      </div>
      <PopupForm id={question.question_id} config={formConfig} submitHandler={addAnswer} />
    </div>
  );
}

export default IndividualQuestion;
