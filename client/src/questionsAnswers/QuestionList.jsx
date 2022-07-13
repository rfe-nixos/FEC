import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import IndividualQuestion from './IndividualQuestion';

function QuestionList({ questions, renderQuestions, maxQuestionCount }) {
  return (
    <div id="question-list">
      {questions.slice(0, maxQuestionCount).map((question) => (
        <IndividualQuestion
          key={question.question_id}
          question={question}
          renderQuestions={renderQuestions}
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
