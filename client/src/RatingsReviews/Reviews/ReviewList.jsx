import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: top;
  width: 100%;
`

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  render() {
    return (this.props.reviews.length > 0) ? (
      <StyledList>
        {this.props.reviews.map((review, index) => (
          <ReviewTile
            review={review}
            key={index}
            markHelpful={this.props.markHelpful}
            report={this.props.report}
          />
        ))}
      </StyledList>
    ) : (
      <StyledList>
        <h2>
          There are no reviews currently
        </h2>
      </StyledList>
    );
  }
}

export default ReviewList;
