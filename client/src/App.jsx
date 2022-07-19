import React from 'react';
import styled from 'styled-components';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
<<<<<<< HEAD
import RelatedItems from './related-items/related-items.jsx';
import Overview from './product-details/Overview.jsx';
import { CurrentProductProvider } from './context.jsx';

function App() {
  return (
    <MainDiv>
      <CurrentProductProvider>
        <Overview />
        <RelatedItems />
        <QuestionAnswer productId={37311} />
        <RatingsReviews product_id={37311} />
      </CurrentProductProvider>
    </MainDiv>
=======
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
>>>>>>> 9c11f2df023a3d901f20714a6e4a5aefca4efb3f
  );
}

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
