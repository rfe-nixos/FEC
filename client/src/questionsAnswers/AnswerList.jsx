import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Answer from './Answer';

const CollapseSpan = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const DivAnswer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

function AnswerList({ answerList, questionId, renderQuestions, Title }) {
  // *** TODO if working on pagination, uncomment state ***
  // const [answerList, setAnswerList] = useState([]);
  // ***
  const [collapsed, setCollapsed] = useState(true);

  // *** TODO if working on pagination, uncomment useEffect to render answer question from API ***
  // useEffect(() => {
  //   const requestConfig = {
  //     method: 'GET',
  //     url: `${process.env.API_URL}/qa/questions/${questionId}/answers`,
  //     params: {
  //       page: 1,
  //       count: 5,
  //     },
  //     headers: {
  //       Authorization: process.env.AUTH_TOKEN,
  //     },
  //   };
  //   axios(requestConfig)
  //     .then((result) => {
  //       console.log('axios request is made inside answerlist');
  //       setAnswerList(result.data.results.sort((a, b) => {
  //         if (a.helpfulness < b.helpfulness) return 1;
  //         if (a.helpfulness > b.helpfulness) return -1;
  //         return 0;
  //       }));
  //     })
  //     .catch((err) => {
  //       console.log('failed to get answers', err);
  //     });
  // });
  // ***

  const mapAnswer = (answer) => (
    <Answer
      key={answer.id}
      answer={answer}
      renderQuestions={renderQuestions}
    />
  );

  const handleClick = (e) => {
    const text = e.target.innerText;
    setCollapsed(text === 'COLLAPSE');
  };

  if (Array.isArray(answerList) && answerList.length > 0) {
    return answerList.length > 0 && (
      <DivAnswer>
        <Title>
          A:
        </Title>
        <div className="answer-list">
          {collapsed ? answerList.slice(0, 2).map(mapAnswer) : answerList.map(mapAnswer)}
          {collapsed && answerList.length > 2
          && <CollapseSpan onClick={handleClick}>LOAD MORE ANSWERS</CollapseSpan>}
          {!collapsed && answerList.length > 2
          && <CollapseSpan onClick={handleClick}>COLLAPSE</CollapseSpan>}
        </div>
      </DivAnswer>
    );
  }
  return (
    <DivAnswer>
      <div>0 answers.</div>
    </DivAnswer>
  );
}

export default AnswerList;
