/* eslint-disable no-alert */
import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: top;
  width: 100%;
  border-top: 2px solid black;
  padding: 5%;
`

const StyledButton = styled.button`
  width: 100px;
  font-size: 1em;
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
`

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
    let rId = this.props.review.review_id
    this.props.markHelpful(rId);
  };

  report(e) {
    e.preventDefault();
    const r = confirm('are you sure you want to report this review?');
    if (r) {
      this.props.report(this.props.review.review_id);
    }
  }

  render() {
    return (
      <StyledTile>
        Rating: {this.props.review.rating + " "}
        Date: {format(parseISO(this.props.review.date), 'MMMM dd, yyyy') + " "}
        <h5>{this.props.review.summary}</h5>
        {this.props.review.body + " "}
        {this.props.review.recommend &&
          <h5>
            I recommend this product &#10003;
          </h5>
        }
        {this.props.review.reviewer_name &&
          <h5>
            By: {this.props.review.reviewer_name + " "}
          </h5>
        }
        {this.props.review.response &&
          <h4>
            from the seller: {this.props.review.response}
          </h4>
        }
        Helpful? : {this.props.review.helpfulness + " "}
        <div>
          <StyledButton onClick={this.markHelpful}>YES</StyledButton>
          <StyledButton onClick={this.report}>report</StyledButton>
        </div>

      </StyledTile>
    )
  }
}

export default ReviewTile;
