import React from 'react';

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews(){
    this.props.moreReviews()
  }

  render() {
    return (
      <div>
        This is the Add Bar.
        <button onClick={this.moreReviews}>MORE</button>
        <button>ADD REVIEW</button>
      </div>
    )
  }
}

export default AddBar;


//renders
// a button to load more reviews
// a button to add a review.
