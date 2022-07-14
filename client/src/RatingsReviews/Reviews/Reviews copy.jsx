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
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sort = this.sort.bind(this);
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
    this.addReview = this.addReview.bind(this);
    this.refresh = this.refresh.bind(this);
    this.getByRating = this.getByRating.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    if (!this.state.sorted) {
      axios.get(`${process.env.API_URL}/reviews?product_id=37313&count=${this.state.page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        this.setState({ reviews: response.data.results });
      })
      .catch((err) => console.log('error fetching reviews', err));
    } else if (this.state.sorted) {
      this.sort(this.state.sort_option);
    } else if (this.props.filteredByRating) {
      this.getByRating();
    }
  }

  getByRating() {
      axios.get(`${process.env.API_URL}/reviews?product_id=37313&count=${this.state.page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        if (this.props.filteredByRating) {
          let obj = this.props.ratingFilter;
          let filtered = response.data.results.filter((result) => {
            if (obj[result.rating+""]) {
              return result;
            }
          })
          this.setState({ reviews: filtered });
        }
      })
      .catch((err) => console.log('error fetching reviews', err));
  };

  moreReviews() {
    let page = this.state.page;
    page += 1;
    this.setState({ page }, () => {
      if (this.props.filteredByRating) {
        this.getByRating();
      } else {
        this.getReviews();
      }
    });
  };

  sort(new_option) {
    //if new option is different from current sort option,
    //reset page count, and set sort option to the new option
    if (new_option !== this.state.sort_option) {
      this.setState({ page: 1 }, () => {
        this.getReviews();
      });
    }
    axios.get(`${process.env.API_URL}/reviews?product_id=37311&sort=${this.state.sort_option}&count=${this.state.page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        console.log(response.data.results);
        this.setState(
          { reviews: response.data.results, sort_option: option, sorted: true},
        );
      })
      .catch((err) => console.log('error fetching reviews', err));
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
      <ReviewsContainer data-testid="reviews-1">
        <SortBar
          reviews={this.state.reviews}
          sort={this.sort}
          totalRatings={this.props.totalRatings}
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
      </ReviewsContainer>
    )
  }
}

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  width: 90%;
  min-width: 350px;
  padding: 1%;
  margin-left: 10%;
  height: 90%;
`;

export default Reviews;
