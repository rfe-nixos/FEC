import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import _ from 'underscore';
import Helpful from '../lib/Helpful';
import AddAnswerForm from './addAnswer/AddAnswerForm';
import AnswerList from './AnswerList';
import Options from '../lib/Options';

function IndividualQuestion({ productName, question, renderQuestions }) {
  const [showModal, setShowModal] = useState(false);
  const [answerList, setAnswerList] = useState(sortAnswers(question.answers));
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(100);

  const getAnswers = () => {
    const requestConfig = {
      method: 'GET',
      url: `${process.env.API_URL}/qa/questions/${question.question_id}/answers`,
      params: {
        page,
        count,
      },
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    };
    axios(requestConfig)
      .then((result) => {
        if (result.data.results.length === 0) {
          setHasMore(false);
          return;
        }
        setAnswerList(sortAnswers(result.data.results));
      })
      .catch((err) => {
        console.log('failed to get answers', err);
      });
  };

  const getImageUrl = (formValue) => {
    const { photos } = formValue;
    let photoUploadPromise = [];
    photos.forEach((photo) => {
      const postImageConfig = {
        method: 'POST',
        url: `https://api.cloudinary.com/v1_1/dl9zxpaoq/upload`,
        data: {
          file: photo.file,
          upload_preset: 'upload_preset_atelier',
        }
      };
      photoUploadPromise.push(axios(postImageConfig));
    })

    return Promise.all(photoUploadPromise)
      .then((result) => {
        formValue.photos = result.map((photo) => photo.data.url);
        return formValue;
      })
      .catch((err) => {
        console.log('error uploading images', err);
      });
  };

  const postAnswer = ({ body, name, email, photos }) => {
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
        Authorization: process.env.AUTH_KEY,
      },
    };
    axios(requestConfig)
      .then((response) => {
        getAnswers();
      })
      .catch((err) => {
        console.log('failed posting answer.', err);
      });
  };


  const addAnswer = (formValue) => {
    getImageUrl(formValue)
      .then((result) => {
        postAnswer(result);
      })
      .catch((err) => {
        console.log('error adding answer');
      });
  };

  useEffect(() => {
    if (answerList.length >= count) {
      setCount(count * 2);
    }
  }, [answerList]);

  return (
    <div className="individual-question">
      <DivQuestion>
        <QContainer>
          <Title>Q:</Title>
          <BoldBody>{question.question_body}</BoldBody>
        </QContainer>
        <Options>
          <Helpful
            id={question.question_id}
            type="question"
            currentCount={question.question_helpfulness}
            renderComponent={renderQuestions}
            tabIndex="0"
          />
          <u onClick={() => setShowModal(true)} onKeyDown={() => setShowModal(true)} role="button" tabIndex="-1">
            Add Answer
          </u>
        </Options>
      </DivQuestion>
      <AnswerList
        answerList={answerList}
        renderAnswers={getAnswers}
        Title={Title}
        hasMore={hasMore}
      />
      <AddAnswerForm
        question={question}
        submitHandler={addAnswer}
        productName={productName}
        show={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default IndividualQuestion;

const sortAnswers = (answers) => (
  _.sortBy(answers, (a, b) => {
    if (a.answerer_name.toLowerCase() === 'seller') return -1;
    if (a.helpfulness > b.helpfulness) return -1;
    if (a.helpfulness < b.helpfulness) return 1;
    return 0;
  })
);

const DivQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding-right: 10px;
`;

const Title = styled.span`
  width: 30px;
  font-weight: bold;
`;

const QContainer = styled.div`
  display: flex;
  width: 65%;
`;

const BoldBody = styled.b`
  width: 100%;
`;