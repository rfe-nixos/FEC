/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import Star from '../Ratings/Star';
import PhotoPopup from './PhotoPopup';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openPhotoPop: false,
      photo: '',
    };
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
    this.togglePhotoPop = this.togglePhotoPop.bind(this);
  }

  togglePhotoPop(e) {
    !this.state.openPhotoPop
      ? this.setState({ openPhotoPop: true, photo: e.target.src })
      : this.setState({ openPhotoPop: false });
  }

  markHelpful(e) {
    e.preventDefault();
    const rId = this.props.review.review_id;
    this.props.markHelpful(rId);
  }

  report(e) {
    e.preventDefault();
    const r = confirm('are you sure you want to report this review?');
    if (r) {
      this.props.report(this.props.review.review_id);
    }
  }

  render() {
    return (
      <TileContainer id="tile-container">
        <TileTop>
          <div>
            <Star average={this.props.review.rating} />
          </div>
          <div>
            {`${this.props.review.reviewer_name}, `}
            {`${format(parseISO(this.props.review.date), 'MMMM dd, yyyy')} `}
          </div>
        </TileTop>
        <TileMain>
          <Summary>{this.props.review.summary}</Summary>
          <TileDiv>{this.props.review.body}</TileDiv>
          {this.props.review.recommend
              && (
                <TileDiv><b>I recommend this product &#10003;</b></TileDiv>
              )}
          <TileDiv>
            {this.props.review.photos.length > 0
              && (
              <PhotoDiv>
                {this.props.review.photos.map((photo, index) => <StyledImg data-testid={`photo-${index}-${this.props.index}`} key={index} src={photo.url} onClick={this.togglePhotoPop} />)}
              </PhotoDiv>
              )}
            {(this.state.openPhotoPop) && (<PhotoPopup photoUrl={this.state.photo} togglePhotoPop={this.togglePhotoPop} />)}
            {this.props.review.response
              && (
              <Seller>
                <b>Response:</b>
                <br />
                {' '}
                {this.props.review.response}
              </Seller>
              )}
          </TileDiv>
          <TileBot>
            <span data-testid="review-helpful">
              Helpful?
            </span>
            <Spanny data-testid={`helpful-button-${this.props.index}`} onClick={this.markHelpful}><u>Yes</u></Spanny>
            <span data-testid={`helpful-count-${this.props.index}`}>
              {`(${this.props.review.helpfulness})    |  `}
            </span>
            <Spanny onClick={this.report}><u>Report</u></Spanny>
          </TileBot>
        </TileMain>
      </TileContainer>
    );
  }
}

const TileDiv = styled.div`
  width: 100%;
  font-size: 13px;
  margin-top: 3%;
  color: #4a4a4a;
`;

const Summary = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 5%;
`;

const Spanny = styled.span`
  font-size: 12px;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
  margin-left: 2%;
  margin-right: 1%;
`;

const Seller = styled.div`
  width: 90%;
  height: auto;
  padding: 1.5%;
  padding-left: 4%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: #eaeaea;
  line-height: 200%;
`;

const PhotoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
`;

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  max-width: 600px;
  border-bottom: .5px solid #363636;
  padding: 0%;
  margin-top: 2%;
`;

const TileTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
  width: 100%;
  color: #5d5d5d;
`;

const TileBot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 3%;
  color: #5d5d5d;
`;

const TileMain = styled.div`
  display: flex;
  font-size: small;
  flex-direction: column;
  margin-top: -2%;
  max-width: 100%;
`;

const StyledButton = styled.button`
  width: auto;
  font-size: x-small;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const StyledImg = styled.img`
  max-height: 100px;
  scale: auto;
  border: 1px solid #d9d9d9;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
  transition: opacity .4s;
`;

export default ReviewTile;
