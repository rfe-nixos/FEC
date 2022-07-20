import React, { useState } from 'react';
import { updateReport } from '../lib/api/githubAPI';

function Report({ id, type }) {
  const [reported, setReported] = useState(false);
  const handleClick = () => {
    if (reported) {
      return;
    }
    const executed = confirm("Are you sure you want to report this?");
    if (executed) {
      updateReport(type, id)
        .then(() => {
          setReported(true);
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
