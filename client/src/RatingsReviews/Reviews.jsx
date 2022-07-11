import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewTile from './ReviewTile.jsx';
import AddBar from './AddBar.jsx';
import SortBar from './SortBar.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {

  }

  moreReviews() {

  }

  sort() {

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
