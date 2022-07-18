import React, { setState, useState } from 'react';
import styled from 'styled-components';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items.jsx';
import Overview from './product-details/Overview.jsx';
import TopBar from './TopBar/TopBar.jsx';
import { CurrentProductProvider } from './context.jsx';

function App() {
  return (
    <MainDiv>
      <CurrentProductProvider>
        <TopBar />
        <Overview />
        <RelatedItems />
        <QuestionAnswer productId={37311} />
        <RatingsReviews productId={37311} />
      </CurrentProductProvider>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

export default App;
