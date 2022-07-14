import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Helpful from './Helpful';
import Report from './Report';
import Options from './Options';

const AnswerDiv = styled.div`
  padding-bottom: 10px;
`;

const AnswerText = styled.span`
  font-size: 15px;
`;

function Answer({ answer, renderAnswers }) {
  const answerInfo = (
    <span>
      {answer.answerer_name.toLowerCase() === 'seller' ? <span>by <b>Seller</b></span> : <span>by {answer.answerer_name} </span>}
      {', '}
      {format(new Date(answer.date), 'MMMM d, yyyy')}
    </span>
  );
  const helpful = (
    <Helpful id={answer.answer_id} type="answer"
      currentCount={answer.helpfulness}
      renderComponent={renderAnswers}
    />
  );
  const report = (
    <span>
      <Report
        id={answer.answer_id}
        type={answer}
        renderComponent={renderAnswers}
      />
    </span>
  );

  return (
    <AnswerDiv className="answer">
      <AnswerText className="answer-text">{answer.body}</AnswerText>
      <Options>
        {answerInfo}
        {helpful}
        {report}
      </Options>
    </AnswerDiv>
  );
}

export default Answer;
