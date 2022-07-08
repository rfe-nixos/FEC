import React from 'react';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }
  render() {
    return (
      <div>
        This is the Review list, holds reviewtiles
        <ReviewTile/>
        <ReviewTile/>
        <ReviewTile/>
      </div>
    )

  }
}

export default ReviewList;


//stateful
//state : array of reviews
//renders
// total number of reviews + sort method
// a list of reviewslistentrys
// paginated through the addreview component
//