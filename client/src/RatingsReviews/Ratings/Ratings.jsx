import React from 'react';
import axios from 'axios';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import Summary from './Summary.jsx';
import styled from 'styled-components';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      ratings: {},
      totalRatings: 0,
      isLoaded: false,
    };
    // this.getRatings = this.getRatings.bind(this);
  }

  // componentDidMount() {
  //   this.getRatings();
  // }

  // getRatings() {
  //   axios.get(`${process.env.API_URL}/reviews/meta?product_id=37311`, {
  //     headers: {
  //       Authorization: process.env.AUTH_KEY,
  //     },
  //   })
  //     .then((response) => {
  //       console.log('successfully fetched ratings');
  //       console.log(response.data);
  //       let sum = 0;
  //       let totalRatings = 0;
  //       const r = response.data.ratings;
  //       for (const key in r) {
  //         totalRatings += parseInt(r[key]);
  //         sum += parseInt(key) * parseInt(r[key]);
  //       }
  //       this.setState(
  //         {
  //           meta: response.data, average: (sum / totalRatings).toFixed(2), ratings: response.data.ratings, totalRatings, isLoaded: true,
  //         },
  //       );
  //     })
  //     .catch((err) => console.log('error fetching ratings', err));
  // }

  render() {
    return (
      <RatingsContainer>
        <Summary meta={this.props.meta} average={this.props.average} totalRatings={this.props.totalRatings} isLoaded={this.props.isLoaded} />
        <Breakdown meta={this.props.meta} isLoaded={this.props.isLoaded} totalRatings={this.props.totalRatings} />
        <Characteristics
          meta={this.props.meta}
          isLoaded={this.props.isLoaded}
        />
      </RatingsContainer>
    );
  }
}

const RatingsContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 1%;
  margin-top: -1%;
  width: auto;
`

export default Ratings;
