import React from 'react';
import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';

function RatingsReviews() {
  return (
    <div>
      <h2>RATINGS / REVIEWS</h2>
      <div>
        <Ratings />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
}

export default RatingsReviews;
