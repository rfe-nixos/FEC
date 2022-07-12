import React, { useState } from 'react';
import styled from 'styled-components';
import Answer from './Answer';

const CollapseSpan = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const DivAnswer = styled.div`
  display: flex;
`;

function AnswerList({ answers, renderQuestions, SpanBold, Title }) {
  const [collapsed, setCollapsed] = useState(true);

  const answerList = Object.values(answers).sort((a, b) => {
    if (a.helpfulness < b.helpfulness) return 1;
    if (a.helpfulness > b.helpfulness) return -1;
    return 0;
  });

  const mapAnswer = (answer) => (
    <Answer
      key={answer.id}
      answer={answer}
      renderQuestions={renderQuestions}
    />
  );

  const handleClick = (e) => {
    if (e.target.innerText === 'LOAD MORE ANSWERS') {
      setCollapsed(false);
    } else if (e.target.innerText === 'COLLAPSE') {
      setCollapsed(true);
    }
  };

  return (
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

export default AnswerList;
