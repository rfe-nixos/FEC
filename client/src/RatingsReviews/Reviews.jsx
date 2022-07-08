import React from 'react';
import ReviewList from './ReviewsList.jsx'
import ReviewTile from './ReviewsListEntry.jsx'
import AddBar from './AddBar.jsx'
import SortBar from './SortBar.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div>
        this is the Reviews Component.
        <SortBar />
        <ReviewList />
        <AddBar />
      </div>
    )
  }
}

export default Reviews;
