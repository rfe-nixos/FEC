/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import AddBar from './AddBar.jsx';
import SortBar from './SortBar.jsx';
import styled from 'styled-components';

const StyledReviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  width: 90%;
  padding: 5%;

`

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      page: 1,
      markedHelpful: []
    };
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sort = this.sort.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
    this.addReview = this.addReview.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get(`${process.env.API_URL}/reviews?product_id=37311&count=${this.state.page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        console.log(response.data.results);
        this.setState(
          { reviews: response.data.results },
        );
      })
      .catch((err) => console.log('error fetching reviews', err));
  }

  moreReviews() {
    let page = this.state.page;
    page += 1;
    this.setState({ page });
    this.getReviews();
  }

  sort(option) {
    axios.get(`${process.env.API_URL}/reviews?product_id=37311&sort=${option}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        console.log(response.data.results);
        this.setState(
          { reviews: response.data.results },
        );
      })
      .catch((err) => console.log('error fetching reviews', err));
  }

  addReview(reviewBody) {
    // let temp = {
    //   product_id: 37311,
    //   rating: 5,
    //   name: 'joe',
    //   summary: 'wow',
    //   body: 'cool',
    //   recommend: true,
    //   email: 'aaa@aaa.com',
    //   characteristics: {'125033': 3, '125031': 4, '125032': 5, '125034': 3}
    // };
    // console.log(temp);

    axios.post(`${process.env.API_URL}/reviews`, reviewBody, {
      headers: {
        AUthorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('success adding review', response);
        alert('thank you for your submission');
        // this.getReviews();
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
          this.getReviews();
        })
        .catch((err) => console.log('error marking helpful', err))
    } else {
      alert('you have already marked this review as helpful');
    }
  }

  render() {
    return (
      <div data-testid="reviews-1">
        <SortBar
          reviews={this.state.reviews}
          sort={this.sort}
        />
        <ReviewList
          reviews={this.state.reviews}
          markHelpful={this.markHelpful}
          report={this.report}
        />
        <AddBar
          reviews={this.state.reviews}
          addReview={this.addReview}
          moreReviews={this.moreReviews}
        />
      </div>
    )
  }
}

export default Reviews;
