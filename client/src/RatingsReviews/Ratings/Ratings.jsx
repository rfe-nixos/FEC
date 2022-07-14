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

  render() {
    return (
      <RatingsContainer>
        <Summary
          meta={this.props.meta}
          average={this.props.average}
          totalRatings={this.props.totalRatings}
          isLoaded={this.props.isLoaded}
        />
        <Breakdown
          meta={this.props.meta}
          isLoaded={this.props.isLoaded}
          totalRatings={this.props.totalRatings}
        />
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
