import React, { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import IndividualQuestion from './IndividualQuestion';

const NoDataDiv = styled.div`
  padding: 10px 0;
  font-size: 18px;
`;

function QuestionList({ questions, renderQuestions, maxQuestionCount, keyword, productName }) {
  if (questions.length === 0) {
    return (
      <NoDataDiv id="question-list">
        No Questions Available.
      </NoDataDiv>
    );
  }

  const filteredQuestions = questions
    .filter((question) => (
      question.question_body.match(new RegExp(keyword, 'i'))
    ));

  // if (filteredQuestions.length === 0) {
  //   return (
  //     <NoDataDiv id="question-list">
  //       No Questions Matched.
  //     </NoDataDiv>
  //   );
  // }
  return (
    <div id="question-list">
      {filteredQuestions
        .slice(0, maxQuestionCount)
        .map((question) => (
          <IndividualQuestion
            key={question.question_id}
            question={question}
            renderQuestions={renderQuestions}
            productName={productName}
          />
        ))}
    </div>
  );
}

// QuestionList.propTypes = {
//   questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
// };

// QuestionList.defaultProps = {
//   questions: [],
// };

export default QuestionList;
