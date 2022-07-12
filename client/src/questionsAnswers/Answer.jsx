import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Helpful from './Helpful';

const PropertyDiv = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-start;
  padding: 15px 0;
  font-size: 15px;
  color: grey;
`;

const Span = styled.span`
  padding-right: 10px;
`;

function Answer({ answer, renderQuestions={renderQuestions} }) {
  return (
    <div className="answer">
      <span className="answer-text">{answer.body}</span>
      <PropertyDiv className="answer-properties">
        <Span className="answer-property">by {answer.answerer_name}, {format(new Date(answer.date), 'MMMM d, yyyy')}</Span>
        <Span>|</Span>
        <Span>
          <Helpful id={answer.id} type="answer" currentCount={answer.helpfulness} renderQuestions={renderQuestions} />
        </Span>
        <Span>|</Span>
        <Span>
          {/* <Report id={answer.id} type={answer} /> */}
          <u>Report</u>
        </Span>
      </PropertyDiv>
    </div>
  );
}

export default Answer;
