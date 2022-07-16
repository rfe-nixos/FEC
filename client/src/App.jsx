import React from 'react';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items.jsx';
import Overview from './product-details/Overview.jsx';
import { CurrentProductProvider } from './context.jsx';

// Huzzah for jsx!
function App() {
  return (
    <CurrentProductProvider>
      <Overview />
      <RelatedItems />
      <QuestionAnswer productId={37311} />
      <RatingsReviews product_id={37311} />
    </CurrentProductProvider>
  );
}

export default App;
