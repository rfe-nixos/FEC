import React from 'react';
import ReviewForm from './ReviewForm.jsx';

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };
    this.moreReviews = this.moreReviews.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  moreReviews() {
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
        {`____________________________`}<br />
        <button onClick={this.moreReviews}>MORE</button>
        <button onClick={this.toggleForm}>ADD REVIEW</button>
        {this.state.formShowing && <ReviewForm />}
      </div>
    );
  }
}

export default AddBar;
