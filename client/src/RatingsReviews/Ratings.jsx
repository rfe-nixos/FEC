import React from 'react';
import axios from 'axios';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Summary from './Summary.jsx';

const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe`;

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      ratings: {},
      totalRatings: 0
    }
    this.getRatings = this.getRatings.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidMount() {
    this.getRatings();
    this.getAverage();
  }

  getAverage() {
    let ratings = this.state.meta.ratings;
    console.log('these are the ratings', ratings);
    // let sum = 0;
    // let totalRatings = 0;
    // let average;
    // for (let key in ratings) {
    //   totalRatings += ratings[key];
    //   sum += ratings[key] * key;
    //   console.log(key, ratings[key]);
    // }
    // // average = (sum / totalRatings).toFixed(2);
    // // console.log('this is the average rating', average);
    // // this.setState({average: average});
    // //return average;
  }

  getRatings() {
    axios.get(`${url}/reviews/meta?product_id=37311`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
     .then((response) => {
       console.log('successfully fetched ratings');
       console.log(response.data);
       let sum = 0;
       let totalRatings = 0;
       let r = response.data.ratings;
       for (let key in r) {
         totalRatings += parseInt(r[key]);
         sum += parseInt(key) * parseInt(r[key]);
       }
       this.setState(
         {meta: response.data, ratings: response.data.ratings, average: (sum / totalRatings).toFixed(2), totalRatings: totalRatings}
       )
       this.getAverage();
     })
     .catch((err) => console.log('error fetching ratings, err'));
  }

  render() {
    return (
      <div>
        this is the Ratings Component.
        <Summary meta={this.state.meta} average={this.state.average} totalRatings={this.state.totalRatings}/>
        <Breakdown />
        <Characteristics />
      </div>
    )
  }
}

export default Ratings;


//renders
//average rating from all the reviews,
//shows distribution of ratings.
//shows average size/comfort rating

