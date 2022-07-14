import React, { useState } from 'react';
import axios from 'axios';

function Report({ id, type, renderComponent }) {
  const [reported, setReported] = useState(false);
  const handleClick = () => {
    if (reported) {
      return;
    }

    const executed = confirm("Are you sure you want to report this?");
    if (executed) {
      const requestConfig = {
        method: 'PUT',
        url: `${process.env.API_URL}/qa/answers/${id}/report`,
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      };

      axios(requestConfig)
        .then(() => {
          // renderComponent();
          setReported(true);
        })
        .catch((err) => {
          console.log('failed reporting answer', err);
        });
    }
  };

  return (
    <u onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex="-1">
      {reported ? 'Reported' : 'Report'}
    </u>
  );
}

export default Report;
