import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search';
import QuestionList from './QuestionList';
import MoreQuestions from './MoreQuestions';
import AddQuestion from './AddQuestion';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: auto;
  color : #3d3c3c;
  font-size: 17px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid #3d3c3c;
  background-color: white;
  margin-right: 10px;
`;

const FlexDiv = styled.div`
  display: flex;
`;

function QuestionAnswers({ productId }) {
  const [questionList, setQuestionList] = useState([]);
  const [maxQuestionCount, setMaxQuestionCount] = useState(4);

  const getAllQuestions = () => {
    const requestConfig = {
      method: 'GET',
      url: `${process.env.API_URL}/qa/questions`,
      params: {
        product_id: productId,
        page: 1,
        count: 20,
      },
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios(requestConfig)
      .then((result) => {
        setQuestionList(result.data.results);
      })
      .catch((err) => {
        console.log('failed fetching all questions from API.', err);
      });
  };

  useEffect(() => {
    getAllQuestions(productId);
  }, []);

  return (
    <DivContainer id="question-and-answers">
      <h3>QUESTIONS & ANSWERS</h3>
      <Search />
      <QuestionList
        questions={questionList}
        renderQuestions={getAllQuestions}
        maxQuestionCount={maxQuestionCount}
      />
      <FlexDiv>
        <MoreQuestions
          totalQuestionCount={questionList.length}
          currentMaxCount={maxQuestionCount}
          setMaxQuestionCount={setMaxQuestionCount}
          Button={Button}
        />
        <AddQuestion
          id={productId}
          renderQuestions={getAllQuestions}
          Button={Button}
        />
      </FlexDiv>
    </DivContainer>
  );
}

// QuestionAnswers.propTypes = {
//   productId: PropTypes.number,
// };

// QuestionAnswers.defaultProps = {
//   productId: 0,
// };

export default QuestionAnswers;
