import React from 'react';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items.jsx';

// Huzzah for jsx!
function App() {
  return (
    <RelatedItems />
    <QuestionAnswer productId={37313} />
  );
}

export default App;
