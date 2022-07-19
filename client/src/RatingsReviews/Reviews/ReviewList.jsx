import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile';

function ReviewList({
  reviews, markHelpful, report, scrollMore, page,
}) {
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight + 0.75 > scrollHeight) {
        scrollMore();
      }
    }
  };

  return (reviews.length > 0) ? (
    <StyledList
      onScroll={onScroll}
      ref={listInnerRef}
    >
      {reviews.slice(0, page * 5).map((review) => (
        <ReviewTile
          review={review}
          key={review.review_id}
          markHelpful={markHelpful}
          report={report}
        />
      ))}
    </StyledList>
  ) : (
    <StyledList>
      <h2>
        There are no reviews currently
      </h2>
    </StyledList>
  );
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 300px;
  max-height: 600px;
  overflow-y: auto;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export default ReviewList;
