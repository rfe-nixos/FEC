/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import AddBar from './AddBar.jsx';
import SortBar from './SortBar.jsx';
import styled from 'styled-components';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      page: 1,
      markedHelpful: [],
      sort_option: '',
      sorted: false,
    };
    this.addReview = this.addReview.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  addReview(reviewBody) {
    axios.post(`${process.env.API_URL}/reviews`, reviewBody, {
      headers: {
        AUthorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('success adding review', response);
        alert('thank you for your submission');
        this.refresh();
      })
      .catch((err) => console.log('error adding review', err));
  }

  refresh() {
    window.location.reload();
  }

  report(reviewId) {
    axios.put(`${process.env.API_URL}/reviews/${reviewId}/report`, {review_id: reviewId}, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then(() => {
        this.setState({ reviewed: true });
        console.log('success reporting review');
        this.getReviews();
      })
      .catch((err) => console.log('error reporting review', err))
  }

  markHelpful(reviewId) {
    if (this.state.markedHelpful.indexOf(reviewId) === -1) {
      axios.put(`${process.env.API_URL}/reviews/${reviewId}/helpful`, {review_id: reviewId}, {
        headers: {
          Authorization: process.env.AUTH_KEY,
        },
      })
        .then(() => {
          let markedHelpful = this.state.markedHelpful;
          markedHelpful.push(reviewId);
          this.setState({ markedHelpful });
          this.props.getReviews();
        })
        .catch((err) => console.log('error marking helpful', err))
    } else {
      alert('you have already marked this review as helpful');
    }
  }

  render() {
    return (
      <ReviewsContainer data-testid="reviews-1">
        <SortBar
          reviews={this.props.reviews}
          sort={this.props.sort}
          totalRatings={this.props.totalRatings}
        />
        <ReviewList
          reviews={this.props.reviews}
          markHelpful={this.markHelpful}
          report={this.report}
          moreReviews={this.props.moreReviews}
        />
        <AddBar
          reviews={this.props.reviews}
          addReview={this.addReview}
          moreReviews={this.props.moreReviews}
        />
      </ReviewsContainer>
    )
  }
}

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  min-width: 350px;
  padding: 1%;
  margin-left: 10%;
  height: 90%;
`;

export default Reviews;
