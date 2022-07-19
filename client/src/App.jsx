import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RatingsReviews from './RatingsReviews/RatingsReviews.jsx';
import QuestionAnswer from './questionsAnswers/QuestionAnswers';
import RelatedItems from './related-items/related-items.jsx';
import Overview from './product-details/Overview.jsx';
import TopBar from './TopBar/TopBar.jsx';
import BotBar from './TopBar/BotBar.jsx';
import { CurrentProductProvider } from './context.jsx';

function App() {
  const ratingsRef = useRef();
  const topRef = useRef();
  const refs = [ratingsRef, topRef];
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    window.onclick = (event) => {
      for (let i = 0; i < refs.length; i++) {
        let currentRef = refs[i];
        if (currentRef.current.contains(event.target)
        || event.target === ratingsRef.current) {
          const clickBody = {
            element: currentRef.current.innerHTML,
            time: new Date().toLocaleString(),
            widget: currentRef.current.id,
          };
          setClicks((oldClicks) => [...oldClicks, clickBody]);
          sendInteraction(clickBody);
          break;
        }
      }
    };
  }, []);

  const sendInteraction = (click) => {
    axios.post(`${process.env.API_URL}/interactions`, click, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((res) => {
        console.log('success posting interaction', res);
      })
      .catch((err) => console.log('error posting interaction', err));
  };

  return (
    <MainDiv>
      <CurrentProductProvider>
        <TopBar ratingsRef={ratingsRef} ref={topRef} />
        <Overview />
        <RelatedItems />
        <QuestionAnswer productId={37311} />
        <RatingsReviews ref={ratingsRef} />
        <BotBar />
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
