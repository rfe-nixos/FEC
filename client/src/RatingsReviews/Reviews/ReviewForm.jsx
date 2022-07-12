import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      summary: '',
      body: '',
      name: '',
      email: '',
      recommend: false,
    };
    this.addReview = this.addReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.recommend = this.recommend.bind(this);
  }

  addReview(e) {
    // format it here
    // this.props.addReview();
    e.preventDefault();
    const reviewBody = {
      product_id: 37311,
      rating: parseInt(this.state.rating),
      summary: this.state.summary,
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      recommend: this.state.recommend,
      characteristics: {'125033': 3, '125031': 4, '125032': 5, '125034': 3}
    };
    console.log(reviewBody);
    this.props.addReview(reviewBody);
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  recommend(e) {
    e.preventDefault();
    this.setState({ recommend: true });
  }

  render() {
    return (
      <div>
        here is the review form.
        <form>
          <input placeholder="rating" name="rating" onChange={this.handleChange}/>
          <textarea placeholder="summary" name="summary" onChange={this.handleChange} />
          <textarea placeholder="body" name="body" onChange={this.handleChange} />
          <button onClick={this.recommend}>recommend?</button>
          <input placeholder="name" name="name" onChange={this.handleChange} />
          <input placeholder="email" name="email" onChange={this.handleChange} />
          <input type="submit" onClick={this.addReview} />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
