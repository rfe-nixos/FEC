import React from 'react';
import ReviewTile from './ReviewTile.jsx'

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  render() {
    return (this.props.reviews.length > 0) ? (
      <div>
        This is the Review list, holds reviewtiles
        {this.props.reviews.map((review, index) => {
          return <ReviewTile
            review = {review}
            key = {index}
          />
        })}
      </div>
    ) : (
      <div>
        There are no reviews currently.
      </div>
    )

  }
}

export default ReviewList;

