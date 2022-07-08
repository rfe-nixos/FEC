import React from "react";

class SortBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.sort = this.sort.bind(this);
  }

  sort() {

  }

  render() {
    return (
      <div>
        This is the Sort Bar.
        Should show how many reviews there are.
        {this.state.reviews.length}
        <button>SORT</button>
      </div>
    )
  }
}

export default SortBar;


//renders
// a button to load more reviews
// a button to add a review.
