import React from 'react';

function Summary({ average, totalRatings, isLoaded }) {
  return (
    <div>
      {!isLoaded && <h4>loading. . .</h4>}
      {(isLoaded)
        && (
        <div>
          {`average rating: ${average}`}
          <br />
          {`out of ${totalRatings} reviews`}
        </div>
        )}
    </div>
  );
}

export default Summary;
