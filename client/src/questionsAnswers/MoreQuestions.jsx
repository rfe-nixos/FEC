import React, { useEffect } from 'react';
// import ThemeProvider from 'styled-components';

function MoreQuestions({ totalQuestionCount, currentMaxCount, setMaxQuestionCount, Button }) {
  const handleClick = (e) => {
    e.preventDefault();
    setMaxQuestionCount(currentMaxCount + 2);
  };

  return (
    <div id="add-question-btn">
      {/* TODO CHANGE Qcount to 4, <= to < */}
      {totalQuestionCount > 4 && currentMaxCount < totalQuestionCount
      && (
        <Button type="submit" onClick={handleClick}>
          MORE ANSWERED QUESTIONS
        </Button>
      )}
    </div>
  );
}

export default MoreQuestions;
