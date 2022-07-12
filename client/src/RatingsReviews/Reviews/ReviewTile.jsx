/* eslint-disable no-alert */
import React from 'react';
import { format, parseISO } from 'date-fns';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewed: [],
    };
    this.markHelpful = this.markHelpful.bind(this);
    this.report = this.report.bind(this);
  }

  markHelpful() {
    let rId = this.props.review.review_id
    this.props.markHelpful(rId);
  };

  report() {
    const r = confirm('are you sure you want to report this review?');
    if (r) {
      this.props.report(this.props.review.review_id);
    }
  }

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
        <button onClick={this.report}>report</button>
      </div>
    )
  }
}

export default ReviewTile;
