import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Summary from './Summary.jsx';

function Ratings(props) {
  const boxRef = useRef();
  const [isInside, setIsInside] = useState();
  const [result, setResult] = useState({});

  // useEffect(() => {
  //   window.onclick = (event) => {
  //     console.log(event.target, 'is the e.target')
  //     console.log(boxRef.current);
  //     if (event.target.contains(boxRef.current)
  //       && event.target !== boxRef.current) {
  //       setIsInside(false);
  //     } else {
  //       setIsInside(true);
  //       setResult(
  //         {
  //           element: boxRef.current,
  //           time: new Date().toLocaleString(),
  //           module: boxRef.current.id
  //         })
  //     }
  //   }
  // }, []);

  return (
    <RatingsContainer id="ratings-main" ref={boxRef}>
      <Summary
        meta={props.meta}
        average={props.average}
        totalRatings={props.totalRatings}
        isLoaded={props.isLoaded}
      />
      <Breakdown
        meta={props.meta}
        isLoaded={props.isLoaded}
        totalRatings={props.totalRatings}
        setRatingFilter={props.setRatingFilter}
        ratingFilter={props.ratingFilter}
      />
      <Characteristics
        meta={props.meta}
        isLoaded={props.isLoaded}
      />
    </RatingsContainer>
  );
}

const RatingsContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 1%;
  margin-top: -1%;
  width: 40%;
`;

export default Ratings;
