import React, { useState, useEffect } from 'react';
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
  const [answerList, setAnswerList] = useState([]);

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

  const getAnswers = () => {
    const requestConfig = {
      method: 'GET',
      url: `${process.env.API_URL}/qa/questions/${question.question_id}/answers`,
      params: {
        page: 1,
        count: 5,
      },
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios(requestConfig)
      .then((result) => {
        setAnswerList(result.data.results.sort((a, b) => {
          if (a.helpfulness < b.helpfulness) return 1;
          if (a.helpfulness > b.helpfulness) return -1;
          return 0;
        }));
      })
      .catch((err) => {
        console.log('failed to get answers', err);
      });
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
        document.getElementById(`${question.question_id}-popup`).style.display = 'none';
        getAnswers();
      })
      .catch((err) => {
        console.log('failed posting answer.', err);
      });
  };

  const handleClick = () => {
    document.getElementById(`${question.question_id}-popup`).style.display = 'flex';
  };

  useEffect(() => {
    getAnswers();
  }, []);

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
            renderComponent={renderQuestions}
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
        answerList={answerList}
        renderAnswers={getAnswers}
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
