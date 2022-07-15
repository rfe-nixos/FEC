/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import Star from '../Ratings/Star.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewed: [],
    };
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
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
      <TileContainer>
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
          <div><h5>{this.props.review.summary}</h5></div>
          <div><small>{this.props.review.body}</small></div>
          <div>
            {this.props.review.recommend
              && (
              <h5>
                I recommend this product &#10003;
              </h5>
              )}
            {this.props.review.photos.length > 0
              && (
                <StyledImg src={this.props.review.photos[0]['url']} />
              )
            }
            {this.props.review.response
              && (
              <h4>
                from the seller:
                {' '}
                {this.props.review.response}
              </h4>
              )}
          </div>
          <div>
            <small>
              Helpful? :
              {' '}
              {`${this.props.review.helpfulness} `}
            </small>
            <StyledButton onClick={this.markHelpful}>YES</StyledButton>
            <StyledButton onClick={this.report}>report</StyledButton>
          </div>
        </TileMain>
      </TileContainer>
    );
  }
}

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  max-width: 400px;
  border-bottom: 1px solid black;
  padding: 0%;
  margin-top: 1%;
`;

const TileTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: x-small;
  align-items: center;
`;

const TileMain = styled.div`
  display: flex;
  font-size: small;
  flex-direction: column;
  margin-top: -2%;
  max-width: 400px
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
`;

export default ReviewTile;
