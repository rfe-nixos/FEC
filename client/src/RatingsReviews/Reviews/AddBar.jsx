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
    console.log(e);
    let time = new Date().toLocaleTimeString();
    console.log(time);
    this.props.moreReviews();
  }

  toggleForm() {
    this.state.formShowing
      ? this.setState({ formShowing: false })
      : this.setState({ formShowing: true });
  }

  render() {
    return (
      <AddBarMain>
        <StyledButton onClick={this.moreReviews}>MORE REVIEWS</StyledButton>
        <StyledButton onClick={this.toggleForm}>ADD A REVIEW +</StyledButton>
        {this.state.formShowing && <ReviewForm productId={this.props.productId} addReview={this.props.addReview} toggleForm={this.toggleForm} />}
      </AddBarMain>
    );
  }
}

const AddBarMain = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`

const StyledButton = styled.button`
  width: auto;
  font-size: small;
  padding: 15px;
  border: 1px solid #3d3c3c;
  background-color: white;
  margin-right: 20px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

export default AddBar;
