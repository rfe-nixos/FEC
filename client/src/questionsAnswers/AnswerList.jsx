import React, { useState } from 'react';
import styled from 'styled-components';
import Answer from './Answer';

const CollapseSpan = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const DivAnswer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

function AnswerList({ answerList, renderAnswers, Title }) {
  const [collapsed, setCollapsed] = useState(true);

  const mapAnswer = (answer) => (
    <Answer
      key={answer.answer_id}
      answer={answer}
      renderAnswers={renderAnswers}
    />
  );

  const handleClick = (e) => {
    const text = e.target.innerText;
    setCollapsed(text === 'COLLAPSE');
  };

  if (Array.isArray(answerList) && answerList.length > 0) {
    return answerList.length > 0 && (
      <DivAnswer>
        <Title>A:</Title>
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
