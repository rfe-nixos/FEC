import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
// import Search from './Search';
import QuestionList from './QuestionList';
// import MoreQuestions from './MoreQuestions';
import AddQuestion from './AddQuestion';
import config from '../../../config';

const { API_KEY, API_URL } = config;
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: auto;
`;

const Button = styled.button`
  width: 30%;
`;

function QuestionAnswers({ productId }) {
  const [questionList, setQuestionList] = useState([]);
  // axios call to api to get all questions

  const getAllQuestions = () => {
    axios.get(`${API_URL}/qa/questions`, { params: { product_id: productId }, headers: { Authorization: API_KEY } })
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
    <div id="question-and-answers">
      {/* <Search /> */}
      <QuestionList questions={questionList} renderQuestions={getAllQuestions} DivContainer={DivContainer} />
      {/* <MoreQuestions productId={productId} /> */}
      <AddQuestion id={productId} renderQuestions={getAllQuestions} DivContainer={DivContainer} />
    </div>
  );
}

QuestionAnswers.propTypes = {
  productId: PropTypes.number,
};

QuestionAnswers.defaultProps = {
  productId: 0,
};

export default QuestionAnswers;
