import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
=======

import Overview from './product-details/Overview';
import RatingsReviews from './RatingsReviews/RatingsReviews';
>>>>>>> main
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items';

function App() {
  return (
    <MainDiv id="app">
      <Overview />
      <RelatedItems />
      <QuestionAnswer productId={37311} />
<<<<<<< HEAD
      <RatingsReviews productId={37311} />
    </MainDiv>

=======
      <RatingsReviews product_id={37311} />
    </div>
>>>>>>> main
  );
}

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default App;
