import React, { useEffect } from 'react';

function MoreQuestions({ expanded, setExpanded, Button }) {
  const handleClick = (e) => {
    e.preventDefault();
    setExpanded(true);
  };

  return (
    <div>
      {!expanded
      && (
        <Button type="submit" onClick={handleClick} data-testid="more-question-btn">
          MORE ANSWERED QUESTIONS
        </Button>
      )}
    </div>
  );
}

export default MoreQuestions;
