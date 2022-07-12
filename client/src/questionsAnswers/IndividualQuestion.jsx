import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Helpful from './Helpful';
import PopupForm from './PopupForm';
import AnswerList from './AnswerList';

const OptionsDiv = styled.div`
display: flex;
width:30%;
justify-content: space-around;
font-size: 15px;
`;

const DivQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  margin: 5px 0;
`;

const Title = styled.span`
  width: 30px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 90%;
`;

const SpanBold = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const QContainer = styled.div`
  display: flex;
  width: 70%;
`;

function IndividualQuestion({ question, renderQuestions }) {
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

  const handleClick = () => {
    document.getElementById(`${question.question_id}-popup`).style.display = 'flex';
  };

  const addAnswer = (formValues) => {
    const { body, name, email, photos } = formValues;
    const url = `${process.env.API_URL}/qa/questions/${question.question_id}/answers`;
    const requestBody = {
      body,
      name,
      email,
      photos,
    };
    const options = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios
      .post(url, requestBody, options)
      .then(() => {
        console.log('request is made in the individual questions');
        document.getElementById(`${question.question_id}-popup`).style.display = 'none';
        // TODO instead of rendering all Questions, we will set the state with added new answer
        renderQuestions();
      })
      .catch((err) => {
        console.log('failed posting answer.', err);
      });
  };

  return (
    <div className="individual-question">
      <DivQuestion className="question">
        <QContainer>
          <Title>
            Q:
          </Title>
          <Content>
            <SpanBold className="question-text">
              {question.question_body}
            </SpanBold>
          </Content>
        </QContainer>
        <OptionsDiv>
          <Helpful
            id={question.question_id}
            type="question"
            currentCount={question.question_helpfulness}
            renderQuestions={renderQuestions}
            tabIndex="0"
          />
          {' | '}
          <u
            onClick={handleClick}
            onKeyDown={handleClick}
            role="button"
            tabIndex="-1"
          >
            Add Answer
          </u>
        </OptionsDiv>
      </DivQuestion>
      <AnswerList
        questionId={question.question_id}
        answerList={Object.values(question.answers)}
        renderQuestions={renderQuestions}
        SpanBold={SpanBold}
        Title={Title}
      />
      <PopupForm
        id={question.question_id}
        config={formConfig}
        submitHandler={addAnswer}
        header={`Q: ${question.question_body}`}
      />
    </div>
  );
}

export default IndividualQuestion;
