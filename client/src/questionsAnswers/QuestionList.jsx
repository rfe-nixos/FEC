import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import IndividualQuestion from './IndividualQuestion';
import MoreQuestions from './MoreQuestions';

function QuestionList({ questions, renderQuestions, DivContainer }) {
  const [maxQuestionCount, setMaxQuestionCount] = useState(4);

  return (
    <DivContainer id="question-list">
      {questions.slice(0, maxQuestionCount).map((question) => (
        <IndividualQuestion
          key={question.question_id}
          question={question}
          renderQuestions={renderQuestions}
        />
      ))}
      <MoreQuestions
        currentCount={maxQuestionCount}
        setMaxQuestionCount={setMaxQuestionCount}
        DivContainer={DivContainer}
      />
    </DivContainer>
  );
}

// QuestionList.propTypes = {
//   questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
// };

// QuestionList.defaultProps = {
//   questions: [],
// };

export default QuestionList;
