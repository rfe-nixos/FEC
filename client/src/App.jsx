import React from 'react';
import styled from 'styled-components';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items.jsx';
import Overview from './product-details/Overview.jsx';
import { CurrentProductProvider } from './context.jsx';
//import nixatelier from './nixatelier.png';

function App() {
  return (
    <MainDiv>
      <CurrentProductProvider>

        <TitleDiv><TitleImg src="public/icons/nixatelier.png" alt="nixatelier" /></TitleDiv>
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
`;

const TitleImg = styled.img`
  max-height: 30px;
  size: auto;
`

const Logo = styled.div`
  font-size: 50px;
  font-weight: 100;
  margin-right: 1%;
`

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 5%;
  font-weight: 200;
  padding: 1%;
  font-size: 30px;
  letter-spacing: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  /* border-bottom: .5px solid black; */
  margin-bottom: 1%;

`
export default App;
