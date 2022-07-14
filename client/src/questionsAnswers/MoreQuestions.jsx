import React, { useEffect } from 'react';
// import ThemeProvider from 'styled-components';

function MoreQuestions({ expanded, setExpanded, Button }) {
  const handleClick = (e) => {
    e.preventDefault();
    setExpanded(true);
  };

  return (
    <div id="add-question-btn">
      {!expanded
      && (
        <Button type="submit" onClick={handleClick}>
          MORE ANSWERED QUESTIONS
        </Button>
      )}
    </div>
  );
}

export default MoreQuestions;
