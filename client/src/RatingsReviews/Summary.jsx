import React from 'react';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: '',
      totalRatings: ''
    }
  }

  componentDidMount() {
    // let average = this.averageRating(this.props.meta.ratings);
    // console.log('ratings here', this.props.meta.ratings);
    // this.setState({averageRating: average});

  }

  // averageRating(ratings) {
  //   let sum = 0;
  //   let totalRatings = 0;
  //   let average;
  //   for (let key in ratings) {
  //     totalRatings += ratings[key];
  //     sum += ratings[key] * key;
  //   }
  //   average = (sum / totalRatings).toFixed(2);
  //   return average;
  // }

  render() {
    return (
      <div>
        {this.props.average ??
          <div>
            {"average rating: " + this.props.average}
          </div>
        }
      </div>
    );
  }
}

export default Summary;