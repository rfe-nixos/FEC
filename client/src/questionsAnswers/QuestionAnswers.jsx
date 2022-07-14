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
  width: 70%;
  margin: auto;
  color : #3d3c3c;
  font-size: 17px;
  height: 100vh;
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

const Title = styled.div`
  font-size: 18px;
  padding: 17px 0;
`;

function QuestionAnswers({ productId }) {
  const [questionList, setQuestionList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  // const [currentCount, setCurrentCount] = useState(30);
  const [filteredKeyword, setFilteredKeyword] = useState('');
  const [productInfo, setProductInfo] = useState({});
  const [expanded, setExpanded] = useState(false);

  const getAllQuestions = (count = 20) => {
    console.log('called')
    const requestConfig = {
      method: 'GET',
      url: `${process.env.API_URL}/qa/questions`,
      params: {
        product_id: productId,
        count,
        page,
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
        setQuestionList([...questionList, ...result.data.results]);
        setPage(page + 1);
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

  // useEffect(() => {
  //   if (questionList.length !== 0 && maxQuestionCount >= questionList.length) {
  //     setCurrentCount(currentCount + 30);
  //   }
  // }, [maxQuestionCount]);

  // useEffect(() => {
  //   getAllQuestions(2);
  // }, []);

  return (
    <DivContainer id="question-and-answers">
      <Title>QUESTIONS & ANSWERS</Title>
      <Search
        setFilter={setFilteredKeyword}
      />
      <QuestionList
        questions={questionList}
        renderQuestions={getAllQuestions}
        keyword={filteredKeyword}
        productName={productInfo.name}
        hasMore={hasMore}
        expanded={expanded}
      />
      <FlexDiv>
        <MoreQuestions
          totalQuestionCount={questionList.length}
          expanded={expanded}
          setExpanded={setExpanded}
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
