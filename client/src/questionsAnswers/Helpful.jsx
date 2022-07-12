import React from 'react';
import axios from 'axios';
import config from '../../../config';

const { API_URL, API_KEY } = config;

function Helpful({ id, type, currentCount, renderQuestions, StyledSpan }) {
  let path;
  if (type === 'question') path = 'qa/questions';
  if (type === 'answer') path = 'qa/answers';
  if (type === 'review') path = 'review';

  const handleClick = () => {
    // send api request
    axios.put(`${API_URL}/${path}/${id}/helpful`, {}, { headers: { Authorization: API_KEY } })
      .then(() => {
        // rerender the questionList ....
        renderQuestions();
      })
      .catch((err) => {
        console.log(`Failed PUT request for marking ${type} of id ${id} helpful.`, err);
      });
  };

  return (
    <div className="helpful">
      <span>Helpful? </span>
      <u onClick={handleClick}>Yes</u>
      <span> {`(${currentCount})`}</span>
    </div>
  );
}

export default Helpful;
