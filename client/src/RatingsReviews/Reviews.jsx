import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewTile from './ReviewTile.jsx';
import AddBar from './AddBar.jsx';
import SortBar from './SortBar.jsx';
import axios from 'axios';
//require('dotenv').config({ "path": false });

const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      page: 1,
    };
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get(`${url}/reviews?product_id=37311&page=${this.state.page}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
     .then((response) => {
       console.log('successfully fetched reviews');
       console.log(response.data.results);
       this.setState(
         {reviews: response.data.results}
       )
     })
     .catch((err) => console.log('error fetching reviews, err'));
  }

  moreReviews() {
    let page = this.state.page;
    page++;
    this.setState({page: page});
    this.getReviews();

  }

  sort(option) {
    console.log(option, 'has been selected');
    axios.get(`${url}/reviews?product_id=37311&sort=${option}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
     .then((response) => {
       console.log('successfully fetched reviews');
       console.log(response.data.results);
       this.setState(
         {reviews: response.data.results},
       )
     })
     .catch((err) => console.log('error fetching reviews', err));
  }



  addReview() {

  }

  render() {
    return (
      <div>
        this is the Reviews Component.
        <SortBar
          reviews={this.state.reviews}
          sort={this.sort}
        />
        <ReviewList reviews={this.state.reviews}/>
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
