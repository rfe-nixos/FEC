import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex; /* Hidden by default */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

const Modal = styled.div`
  width:600px;
  height:400px;
  display:block;
  margin:50% 0 0 -300px;
  position:relative;
  top:50%; left:50%;
  background:#fff;
  opacity:0;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left:;
  align-items: center;
  width: 80%;
  padding: 5%;
`

const StyledInput = styled.input`
  width: 80%;
`

const StyledTextArea = styled.textarea`
  width: 300px;
  height: 120px;
  resize: none;
`
const StyledClose = styled.button`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`

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
    this.closeForm = this.closeForm.bind(this);
  }

  closeForm() {
    window.location.reload();
  }

  addReview(e) {
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
    e.preventDefault();
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
      <StyledForm>
        <h2>here is the review form.</h2>
        <StyledInner>
            <h4>Rating: </h4><StyledInput placeholder="rating" name="rating" onChange={this.handleChange}/>
            <h4>Summary: </h4><textarea placeholder="Example: Best purchase ever!" name="summary" onChange={this.handleChange} />
            <h4>Body: </h4><textarea placeholder="Example: why did you like the product or not?" name="body" onChange={this.handleChange} />
            <button onClick={this.recommend}>recommend?</button>
            <StyledInput placeholder="Example: jackson11" name="name" onChange={this.handleChange} />
            <p><em>For privacy reasons, do not use your full name or email address</em></p>
            <StyledInput placeholder="Example: jackson11@email.com" name="email" onChange={this.handleChange} />
            <p><em>For authentication reasons, you will not be emailed.</em></p>
            <StyledInput type="submit" onClick={this.addReview} />
            <StyledClose onClick={this.closeForm}>CLOSE</StyledClose>
        </StyledInner>
      </StyledForm>
    );
  }
}

export default ReviewForm;
