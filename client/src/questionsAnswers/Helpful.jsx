import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PaddedSpan = styled.span`
  padding-right: 7px;
`;

const PaddedU = styled.u`
  padding-right: 3px;
`;

function Helpful({ id, type, currentCount, renderComponent }) {
  let path;
  if (type === 'question') path = 'qa/questions';
  if (type === 'answer') path = 'qa/answers';
  if (type === 'review') path = 'review';

  const handleClick = () => {
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
      <PaddedSpan>
        Helpful?
      </PaddedSpan>
      <PaddedU
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex="-1"
      >
        Yes
      </PaddedU>
      <span>
        {`(${currentCount})`}
      </span>
    </div>
  );
}

export default Helpful;
