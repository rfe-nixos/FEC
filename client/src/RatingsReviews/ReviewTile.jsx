import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: {}
    }
  }

  render() {
    return (
      <div>
        Rating: {this.props.review.rating}
        Date: {this.props.review.date}
        <h4>{this.props.review.summary}</h4>
        {this.props.review.body}
        {this.props.review.recommend &&
          <h4>
            I recommend this product &#10003;
          </h4>
        }
        By: {this.props.review.reviewer_name}
        {this.props.review.response &&
          <h4>
            from the seller: {this.props.review.response}
          </h4>
        }
        Helpful? : {this.props.review.helpfulness}
      </div>
    )
  }
}

export default ReviewTile;

//renders
// a single review entry
//which contains
// rating,
// review title
// review body
// recommend
// helpful/report
