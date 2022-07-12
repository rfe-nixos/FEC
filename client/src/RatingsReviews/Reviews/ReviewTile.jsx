/* eslint-disable no-alert */
import React from 'react';
import { formatDistanceToNow, format, parseISO } from 'date-fns';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewed: false,
    };
    this.markHelpful = this.markHelpful.bind(this);
  }

  markHelpful() {
    if (!this.state.reviewed) {
      this.props.markHelpful(this.props.review.review_id);
      this.setState({ reviewed: true });
    } else {
      alert('you have already marked as helpful');
    }
  };

  render() {
    return (
      <div>
        {`____________________________`}<br />
        Rating: {this.props.review.rating + " "}
        Date: {format(parseISO(this.props.review.date), 'MMMM dd, yyyy') + " "}
        <h5>{this.props.review.summary}</h5>
        {this.props.review.body + " "}
        {this.props.review.recommend &&
          <h5>
            I recommend this product &#10003;
          </h5>
        }
        {this.props.review.reviewer_name &&
          <h5>
            By: {this.props.review.reviewer_name + " "}
          </h5>
        }
        {this.props.review.response &&
          <h4>
            from the seller: {this.props.review.response}
          </h4>
        }
        Helpful? : {this.props.review.helpfulness + " "}
        <button onClick={this.markHelpful}>YES</button>
      </div>
    )
  }
}

export default ReviewTile;
