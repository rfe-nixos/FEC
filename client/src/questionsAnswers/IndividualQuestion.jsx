import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Helpful from './Helpful';
import PopupForm from './PopupForm';
import AnswerList from './AnswerList';
import Options from './Options';

const DivQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 10px 0;
`;

const Title = styled.span`
  width: 30px;
  font-weight: bold;
`;

const SpanBold = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const QContainer = styled.div`
  display: flex;
  width: 70%;
`;

function IndividualQuestion({ productName, question, renderQuestions }) {
  // VARIABLE DECLARATION //
  const [answerList, setAnswerList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const count = 4;

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

  // HANDLERS //
  const getAnswers = (initial) => {
    const requestConfig = {
      method: 'GET',
      url: `${process.env.API_URL}/qa/questions/${question.question_id}/answers`,
      params: {
        page,
        count,
      },
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios(requestConfig)
      .then((result) => {
        if (result.data.results.length === 0) {
          setHasMore(false);
          return;
        }
        const newAnswerList = [...answerList, ...result.data.results];
        setAnswerList(newAnswerList.sort((a, b) => {
          if (a.answerer_name.toLowerCase() === 'seller') return -1;
          if (a.helpfulness > b.helpfulness) return -1;
          if (a.helpfulness < b.helpfulness) return 1;
          return 0;
        }));
        setPage(page + 1);
      })
      .catch((err) => {
        console.log('failed to get answers', err);
      });
  };

  const addAnswer = (formValues) => {
    const { body, name, email, photos } = formValues;
    const requestConfig = {
      method: 'POST',
      url: `${process.env.API_URL}/qa/questions/${question.question_id}/answers`,
      data: {
        body,
        name,
        email,
        photos,
      },
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios(requestConfig)
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

  // FUNCTION INVOCATION //
  useEffect(() => {
    getAnswers(true);
  }, []);

  return (
    <div className="individual-question">
      <DivQuestion className="question">
        <QContainer>
          <Title>Q:</Title>
          <SpanBold style={{ width: '90%' }} className="question-text">
            {question.question_body}
          </SpanBold>
        </QContainer>
        <Options>
          <Helpful
            id={question.question_id}
            type="question"
            currentCount={question.question_helpfulness}
            renderComponent={renderQuestions}
            tabIndex="0"
          />
          <u onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex="-1">
            Add Answer
          </u>
        </Options>
      </DivQuestion>
      <AnswerList
        answerList={answerList}
        renderAnswers={getAnswers}
        SpanBold={SpanBold}
        Title={Title}
        hasMore={hasMore}
      />
      <PopupForm
        id={question.question_id}
        config={formConfig}
        submitHandler={addAnswer}
        title={`Submit your Answer`}
        subtitle={`${productName}: ${question.question_body}`}
      />
    </div>
  );
}

export default IndividualQuestion;
