import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getQuestions, getProductInfo } from './API/githubAPI';
import Search from './searchBar/Search';
import QuestionList from './questionAnswersList/QuestionList';
import MoreQuestions from './moreButton/MoreQuestions';
import AddQuestion from './moreButton/AddQuestion';
import { useCurrentProductContext } from '../context';

function QuestionAnswers() {
  const productId = useCurrentProductContext();
  const [questionList, setQuestionList] = useState([]);
  const [filteredKeyword, setFilteredKeyword] = useState('');
  const [productInfo, setProductInfo] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(200);
  const [page, setPage] = useState(1);

  const renderQuestions = () => {
    getQuestions(productId, page, count)
      .then((result) => {
        if (result.data.results.length === 0) {
          return;
        }
        setQuestionList(result.data.results);
      });
  };

  useEffect(() => {
    renderQuestions();
    getProductInfo(productId)
      .then((result) => {
        setProductInfo(result.data);
      });
  }, []);

  useEffect(() => {
    if (questionList.length >= count) {
      setCount(count * 2);
    }
  }, [questionList]);

  return (
    <DivContainer id="question-and-answers">
      <Title>QUESTIONS & ANSWERS</Title>
      <Search setFilter={setFilteredKeyword} />
      <QuestionList
        questions={questionList}
        renderQuestions={renderQuestions}
        keyword={filteredKeyword}
        productName={productInfo.name}
        expanded={expanded}
      />
      <ButtonContainer>
        <MoreQuestions
          totalQuestionCount={questionList.length}
          expanded={expanded}
          setExpanded={setExpanded}
          Button={Button}
        />
        <AddQuestion
          id={productId}
          renderQuestions={renderQuestions}
          Button={Button}
          productName={productInfo.name}
        />
      </ButtonContainer>
    </DivContainer>
  );
}

export default QuestionAnswers;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px auto;
  color : #3d3c3c;
  font-size: 15px;
  padding: 20px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid #3d3c3c;
  background-color: white;
  margin-right: 10px;
  font-weight:500px!important;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Title = styled.div`
  font-size: small;
  padding: 17px 0;
`;
