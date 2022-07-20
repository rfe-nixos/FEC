import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import Helpful from '../../components/Helpful';
import Report from '../../components/Report';
import Options from '../../components/Options';
import Image from '../../components/Image';

const AnswerDiv = styled.div`
  padding-bottom: 10px;
`;

function Answer({ answer, renderAnswers }) {
  const answerInfo = (
    <span>
      {answer.answerer_name.toLowerCase() === 'seller' ? <span>by <b>Seller</b></span> : <span>by {answer.answerer_name} </span>}
      {', '}
      {format(new Date(answer.date), 'MMMM d, yyyy')}
    </span>
  );
  const images = answer.photos.length > 0 && (
    <PhotoDiv>
      {answer.photos.map((photo, index) => (
        <Image
          key={index}
          url={typeof photo === 'object' ? photo.url : photo}
        />
      ))}
    </PhotoDiv>
  );
  const helpful = (
    <Helpful id={answer.answer_id || answer.id}
      type="answer"
      currentCount={answer.helpfulness}
      renderComponent={renderAnswers}
    />
  );
  const report = (
    <span>
      <Report
        id={answer.answer_id || answer.id}
        type="answer"
        renderComponent={renderAnswers}
      />
    </span>
  );

  return (
    <AnswerDiv className="answer">
      <div className="answer-text">{answer.body}</div>
      {images}
      <Options>
        {answerInfo}
        {helpful}
        {report}
      </Options>
    </AnswerDiv>
  );
}

export default Answer;

const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  margin: 5px 0;
`