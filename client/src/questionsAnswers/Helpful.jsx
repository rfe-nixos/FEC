import React, { useState } from 'react';
import axios from 'axios';

function Helpful({ id, type, currentCount, renderComponent, StyledSpan }) {

  let path;
  if (type === 'question') path = 'qa/questions';
  if (type === 'answer') path = 'qa/answers';
  if (type === 'review') path = 'review';

  const handleClick = () => {
    // send api request
    console.log(id);
    const url = `${process.env.API_URL}/${path}/${id}/helpful`;
    const requestBody = {};
    const options = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios
      .put(url, requestBody, options)
      .then(() => {
        renderComponent();
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
