import React from 'react';
import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {}
    }
    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.getRatings();
  }

  getRatings() {

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

