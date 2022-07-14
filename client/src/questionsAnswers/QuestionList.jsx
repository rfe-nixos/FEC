import React, { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import IndividualQuestion from './IndividualQuestion';

const OuterDiv = styled.div`
  margin: 20px 0;
`;

const Scroller = styled.div`
  height: 65vh;
  width: 100%;
  overflow-y: auto;
  margin: 10px 0;
`;

const NoDataDiv = styled.div`
  padding: 10px 0;
  font-size: 18px;
`;

function QuestionList({ questions, renderQuestions, keyword, productName, hasMore, expanded }) {
  console.log(hasMore);
  if (questions.length === 0) {
    return (
      <NoDataDiv id="question-list">
        No Questions Available.
      </NoDataDiv>
    );
  }

  const filteredQuestions = questions
    .filter((question) => (
      question.question_body.match(new RegExp(keyword, 'i'))
    ));

  return (
    <OuterDiv id="question-list">
      {expanded
      && (
        <Scroller>
          <InfiniteScroll
            dataLength={questions.length}
            next={renderQuestions}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={(
              <p style={{ textAlign: 'center' }}>
                <b>You have seen all questions</b>
              </p>
            )}
          >
            {filteredQuestions
              .map((question) => (
                <IndividualQuestion
                  key={question.question_id}
                  question={question}
                  renderQuestions={renderQuestions}
                  productName={productName}
                />
              ))}
          </InfiniteScroll>
        </Scroller>
      )}
      {!expanded
      && (
        <div>
          {filteredQuestions
            .slice(0, 2)
            .map((question) => (
              <IndividualQuestion
                key={question.question_id}
                question={question}
                renderQuestions={renderQuestions}
                productName={productName}
              />
            ))}
        </div>
      )}
    </OuterDiv>
  );
}

// QuestionList.propTypes = {
//   questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
// };

// QuestionList.defaultProps = {
//   questions: [],
// };

export default QuestionList;
