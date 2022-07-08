import React from "react";

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {}
    }
  }

  render() {
    return (
      <div>
        this is the Ratings Component.
      </div>
    )
  }
}

export default Ratings;


//renders
//average rating from all the reviews,
//shows distribution of ratings.
//shows average size/comfort rating

