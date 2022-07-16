import React from 'react';

import Overview from './product-details/Overview';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionAnswer from './questionsAnswers/QuestionAnswers.jsx';
import RelatedItems from './related-items/related-items.jsx';

function App() {
  return (
    <div>
      <Overview />
      <RelatedItems />
      <QuestionAnswer productId={37311} />
      <RatingsReviews product_id={37311} />
    </div>
  );
}

export default App;
