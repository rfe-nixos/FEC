import React from 'react';
import styled from 'styled-components';
import IndividualQuestion from './IndividualQuestion';

function QuestionList({ questions, renderQuestions, keyword, productName, expanded }) {
  if (questions.length === 0) {
    return (
      <NoDataDiv id="question-list">
        No Questions Available.
      </NoDataDiv>
    );
  }

  let filteredQuestions = questions
    .filter((question) => (
      question.question_body.match(new RegExp(keyword, 'i'))
    ));

  filteredQuestions = expanded ? filteredQuestions : filteredQuestions.slice(0, 2);

  return (
    <OuterDiv id="question-list">
      <Scroller>
        {filteredQuestions
          .map((question) => (
            <IndividualQuestion
              key={question.question_id}
              question={question}
              renderQuestions={renderQuestions}
              productName={productName}
            />
          ))}
      </Scroller>
    </OuterDiv>
  );
}

export default QuestionList;

const OuterDiv = styled.div`
  margin: 20px 0;
`;

const Scroller = styled.div`
  width: 100%;
  overflow-y: auto;
  margin: 10px 0;
  max-height: 70vh;
`;

const NoDataDiv = styled.div`
  padding: 10px 0;
  font-size: 18px;
`;
