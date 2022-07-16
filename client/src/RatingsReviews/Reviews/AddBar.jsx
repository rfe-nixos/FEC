import React from 'react';
import styled from 'styled-components';
import ReviewForm from './AddReview/ReviewForm.jsx';

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };
    this.moreReviews = this.moreReviews.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  moreReviews(e) {
    e.preventDefault();
    this.props.moreReviews();
  }

  toggleForm() {
    this.state.formShowing
      ? this.setState({ formShowing: false })
      : this.setState({ formShowing: true });
  }

  render() {
    return (
      <div>
        <StyledButton onClick={this.moreReviews}>MORE REVIEWS</StyledButton>
        <StyledButton onClick={this.toggleForm}>ADD A REVIEW +</StyledButton>
        {this.state.formShowing && <ReviewForm product_id={this.props.productId} addReview={this.props.addReview} />}
      </div>
    );
  }
}

const AddBarContainer = styled.div`

`

const StyledButton = styled.button`
  width: auto;
  font-size: small;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`

export default AddBar;
