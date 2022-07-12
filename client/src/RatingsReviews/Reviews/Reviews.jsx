import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import AddBar from './AddBar.jsx';
import SortBar from './SortBar.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      page: 1
    };
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sort = this.sort.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get(`${process.env.API_URL}/reviews?product_id=37311&page=${this.state.page}`, {
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

  addReview() {

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
    console.log('this is the reviewId:', reviewId);
    axios.put(`${process.env.API_URL}/reviews/${reviewId}/helpful`, {review_id: reviewId}, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then(() => {
        this.setState({ reviewed: true });
        console.log('success marking helpful');
        this.getReviews();
      })
      .catch((err) => console.log('error marking helpful', err))
  }

  render() {
    return (
      <div>
        {`____________________________`}<br />
        <h5>R E V I E W S .</h5>
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
