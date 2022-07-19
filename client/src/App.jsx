import React from 'react';

import Overview from './product-details/Overview';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items';
import { CurrentProductProvider } from './context';
import {QuestionListProvider} from './questionsAnswers/contexts/QuestionListContext';

function App() {
  return (
    <CurrentProductProvider>
      {/* <Overview />
      <RelatedItems /> */}
      <QuestionListProvider>
        <QuestionAnswer />
      </QuestionListProvider>
      <RatingsReviews product_id={37311} />
    </CurrentProductProvider>
  );
}

export default App;
