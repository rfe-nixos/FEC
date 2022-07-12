import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Report({ id, type, renderQuestions }) {
  const handleClick = () => {
    const requestConfig = {
      method: 'PUT',
      url: `${process.env.API_URL}/qa/answers/${id}/report`,
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios(requestConfig)
      .then(() => {
        renderQuestions();
      })
      .catch((err) => {
        console.log('failed reporting answer', err);
      });
  };

  return (
    <u onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex="-1">
      Report
    </u>
  );
}

export default Report;