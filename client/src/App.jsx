import React from 'react';

import Overview from './product-details/Overview';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import QuestionsAnswers from './QuestionsAnswers/QuestionsAnswers';
import RelatedItems from './related-items/related-items';
import { CurrentProductProvider } from './context';
import { QuestionListProvider } from './QuestionsAnswers/contexts/QuestionListContext';

function App() {
  return (
    <CurrentProductProvider>
      <Overview />
      <RelatedItems />
      <QuestionListProvider>
        <QuestionsAnswers />
      </QuestionListProvider>
      <RatingsReviews product_id={37311} />
    </CurrentProductProvider>
  );
}

export default App;
