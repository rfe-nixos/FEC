import React from 'react';

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }
  render() {
    return (
      <div>
        This is the Add Bar.
        <button>MORE</button>
        <button>ADD REVIEW</button>
      </div>
    )
  }
}

export default AddBar;


//renders
// a button to load more reviews
// a button to add a review.
