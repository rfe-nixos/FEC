import React from 'react';
import starRating from '../lib/starRatings.js';
import Stars from './Stars.jsx';

function Summary({ average, totalRatings, isLoaded }) {
  return (
    <div>
      {!isLoaded && <h4>loading. . .</h4>}
      {(isLoaded)
        && (
        <div>
          <h2>{`${average}`}</h2>
          <br />
          <div id="outerstar">
            <Stars average={average} percentage={starRating(average)} />
          </div>
          <br />
          <em>{`out of ${totalRatings} reviews`}</em>
        </div>
        )}
    </div>
  );
}

export default Summary;
