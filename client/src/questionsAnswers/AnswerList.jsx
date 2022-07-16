import React, { useState } from 'react';
import styled from 'styled-components';
import Answer from './Answer';

function AnswerList({ answerList, renderAnswers, Title }) {
  const [collapsed, setCollapsed] = useState(true);
  const filteredAnswerList = collapsed ? answerList.slice(0, 2) : answerList;

  if (Array.isArray(answerList) && answerList.length > 0) {
    return answerList.length > 0 && (
      <DivAnswer>
        <Title>A:</Title>
        <AnswerListDiv>
          <Scroller id="scrollableDiv">
            {filteredAnswerList.map((answer) => (
              <Answer
                key={answer.answer_id}
                answer={answer}
                renderAnswers={renderAnswers}
              />
            ))}
          </Scroller>
          {collapsed && answerList.length > 2
          && <CollapseSpan onClick={() => setCollapsed(false)}>LOAD MORE ANSWERS</CollapseSpan>}
          {!collapsed
          && <CollapseSpan onClick={() => setCollapsed(true)}>COLLAPSE ANSWERS</CollapseSpan>}
        </AnswerListDiv>
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

const CollapseSpan = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const DivAnswer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Scroller = styled.div`
  max-height: 20vh;
  width: 70%;
  overflow-y: auto;
  height: 300;
  display: 'flex';
  flex-direction: 'column-reverse';
`;

const AnswerListDiv = styled.div`
  width: 100%;
  height: 300;
`;
