import React from 'react';

function MoreQuestions({ currentCount, setMaxQuestionCount, DivContainer }) {
  const handleClick = (e) => {
    e.preventDefault();
    setMaxQuestionCount(currentCount + 2);
  };

  return (
    <DivContainer id="add-question-btn">
      <button type="submit" onClick={handleClick}>
        MORE ANSWERED QUESTIONS
      </button>
    </DivContainer>
  );
}

export default MoreQuestions;
