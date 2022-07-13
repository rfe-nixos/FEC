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
  width: 60%;
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
// ask if productName can be passed down as props
function QuestionAnswers({ productId }) {
  const [questionList, setQuestionList] = useState([]);
  const [maxQuestionCount, setMaxQuestionCount] = useState(2);
  const [currentCount, setCurrentCount] = useState(30);
  const [filteredKeyword, setFilteredKeyword] = useState('');
  const [productInfo, setProductInfo] = useState({});

  const getAllQuestions = () => {
    const requestConfig = {
      method: 'GET',
      url: `${process.env.API_URL}/qa/questions`,
      params: {
        product_id: productId,
        count: currentCount,
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

  const getProductInfo = () => {
    const requestConfig = {
      method: 'GET',
      url: `${process.env.API_URL}/products/${productId}`,
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios(requestConfig)
      .then((result) => {
        setProductInfo(result.data);
      })
      .catch((err) => {
        console.log('failed fetching product info.', err);
      });
  };

  useEffect(() => {
    getAllQuestions();
    getProductInfo();
  }, []);

  useEffect(() => {
    if (questionList.length !== 0 && maxQuestionCount >= questionList.length) {
      setCurrentCount(currentCount + 30);
    }
  }, [maxQuestionCount]);

  useEffect(() => {
    getAllQuestions();
  }, [currentCount]);


  return (
    <DivContainer id="question-and-answers">
      <h3>QUESTIONS & ANSWERS</h3>
      <Search
        setFilter={setFilteredKeyword}
      />
      <QuestionList
        questions={questionList}
        renderQuestions={getAllQuestions}
        maxQuestionCount={maxQuestionCount}
        keyword={filteredKeyword}
        productName={productInfo.name}
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
          productName={productInfo.name}
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
