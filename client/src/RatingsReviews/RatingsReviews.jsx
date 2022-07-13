import React from 'react';
import styled from 'styled-components';
import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';
import axios from 'axios';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      ratings: {},
      totalRatings: 0,
      isLoaded: false,
    };
    this.getRatings = this.getRatings.bind(this);
  }

  componentDidMount() {
    this.getRatings();
  }

  getRatings() {
    axios.get(`${process.env.API_URL}/reviews/meta?product_id=37311`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched ratings');
        console.log(response.data);
        let sum = 0;
        let totalRatings = 0;
        const r = response.data.ratings;
        for (const key in r) {
          totalRatings += parseInt(r[key]);
          sum += parseInt(key) * parseInt(r[key]);
        }
        this.setState(
          {
            meta: response.data, average: (sum / totalRatings).toFixed(2), ratings: response.data.ratings, totalRatings, isLoaded: true,
          },
        );
      })
      .catch((err) => console.log('error fetching ratings', err));
  }


  render() {
    return (
      <StyledMain>
        <StyledTitle>{`RATINGS & REVIEWS`}</StyledTitle>
        <StyledInner>
          <Ratings
            meta={this.state.meta}
            isLoaded={this.state.isLoaded}
            average={this.state.average}
            totalRatings={this.state.totalRatings}
          />
          <Reviews
            totalRatings={this.state.totalRatings}
          />
        </StyledInner>
      </StyledMain>
    );
  }
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
`;
const StyledInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  width: 90%;
  border-top: 1px solid black;
  padding-top: 1%;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2%;
  font-size: small;
  font-weight: 400;
  margin-bottom: 1%;

`;

export default RatingsReviews;
