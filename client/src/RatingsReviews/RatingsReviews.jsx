import React from "react";

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }



  render() {
    return (
      <div>
        Ratings and Reviews here.
      </div>
    )
  }

}

export default RatingsReviews;

//renders
// ratings component on the left
// reviewslist component on the right