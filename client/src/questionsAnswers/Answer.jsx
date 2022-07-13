import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { Stack, Divider } from '@mui/material';
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
  const answerInfo = (
    <Span className="answer-property">
      by {answer.answerer_name}, {format(new Date(answer.date), 'MMMM d, yyyy')}
    </Span>
  );
  const helpful = (
    <Helpful id={answer.answer_id} type="answer"
      currentCount={answer.helpfulness}
      renderComponent={renderAnswers}
    />
  );
  const report = (
    <Span>
      <Report
        id={answer.answer_id}
        type={answer}
        renderComponent={renderAnswers}
      />
    </Span>
  );

  return (
    <AnswerDiv className="answer">
      <span className="answer-text">{answer.body}</span>
      <PropertyDiv className="answer-properties">
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          {answerInfo}
          {helpful}
          {report}
        </Stack>
      </PropertyDiv>
    </AnswerDiv>
  );
}

export default Answer;
