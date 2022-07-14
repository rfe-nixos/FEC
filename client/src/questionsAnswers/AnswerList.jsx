import React, { useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Answer from './Answer';

const CollapseSpan = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const DivAnswer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Scroller = styled.div`
  height: 50vh;
  width: 100%;
  overflow-y: scroll;
`;

const AnswerListDiv = styled.div`
  width: 100%;
`;

function AnswerList({ answerList, renderAnswers, Title, hasMore }) {
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
    setCollapsed(text === 'COLLAPSE ANSWERS');
  };

  if (Array.isArray(answerList) && answerList.length > 0) {
    return answerList.length > 0 && (
      <DivAnswer>
        <Title>A:</Title>
        <AnswerListDiv className="answer-list">
          {collapsed ? <div>{answerList.slice(0, 2).map(mapAnswer)}</div>
            : (
              <Scroller>
                <InfiniteScroll
                  dataLength={answerList.length}
                  next={renderAnswers}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
                  endMessage={(
                    <p style={{ textAlign: 'center' }}>
                      <b>You have seen all answers</b>
                    </p>
                  )}
                >
                  {answerList.map(mapAnswer)}
                </InfiniteScroll>
              </Scroller>
            )}
          {collapsed && answerList.length > 2
          && <CollapseSpan onClick={handleClick}>LOAD MORE ANSWERS</CollapseSpan>}
          {!collapsed && answerList.length > 2
          && <CollapseSpan onClick={handleClick}>COLLAPSE ANSWERS</CollapseSpan>}
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
