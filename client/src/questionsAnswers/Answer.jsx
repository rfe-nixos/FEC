import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Helpful from './Helpful';
import Report from './Report';

const PropertyDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px 0;
  font-size: 15px;
  color: grey;
`;

const Span = styled.span`
  padding-right: 10px;
`;

const AnswerDiv = styled.div`
  padding-bottom: 10px;
`;

function Answer({ answer, renderAnswers }) {
  console.log(answer);
  return (
    <AnswerDiv className="answer">
      <span className="answer-text">{answer.body}</span>
      <PropertyDiv className="answer-properties">
        <Span className="answer-property">
          by {answer.answerer_name}, {format(new Date(answer.date), 'MMMM d, yyyy')}
        </Span>
        <Span>
          |
        </Span>
        <Span>
          <Helpful
            id={answer.answer_id}
            type="answer"
            currentCount={answer.helpfulness}
            renderComponent={renderAnswers}
          />
        </Span>
        <Span>
          |
        </Span>
        <Span>
          {/* TODO */}
          <Report id={answer.answer_id} type={answer} renderComponent={renderAnswers} />
        </Span>
      </PropertyDiv>
    </AnswerDiv>
  );
}

export default Answer;
