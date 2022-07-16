import React from 'react';
import styled from 'styled-components';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items.jsx';
import Overview from './product-details/Overview.jsx';

// Huzzah for jsx!
function App() {
  return (
    <MainDiv id="app">
      <Overview />
      <RelatedItems />
      <QuestionAnswer productId={37311} />
      <RatingsReviews product_id={37319} />
    </MainDiv>

  );
}

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default App;
