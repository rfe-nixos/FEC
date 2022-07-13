import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Helpful from './Helpful';
import Report from './Report';
import Options from './Options';

const AnswerDiv = styled.div`
  padding-bottom: 10px;
`;

function Answer({ answer, renderAnswers }) {
  const answerInfo = (
    <span>
      by {answer.answerer_name}, {format(new Date(answer.date), 'MMMM d, yyyy')}
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
      <span className="answer-text">{answer.body}</span>
      <Options>
        {answerInfo}
        {helpful}
        {report}
      </Options>
    </AnswerDiv>
  );
}

export default Answer;
