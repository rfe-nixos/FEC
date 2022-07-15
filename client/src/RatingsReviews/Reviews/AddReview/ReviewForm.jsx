import React from 'react';
import styled from 'styled-components';
import CharButtons from './CharButtons.jsx';
import StarRatingBar from './StarRatingBar.jsx';
import PhotoForm from './PhotoForm.jsx';

const StyledForm = styled.div`
  display: flex;
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
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  width: 400px;
  height: 80%;
  padding: 1.5%;
  overflow-y: auto;
  background: white;
  border: 1px solid black;
  font-size:small;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

const InnerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: large;
  font-weight: bold;
  width: 100% ;
  border-bottom: .5px solid black;
  padding-bottom: 1%;
  margin-bottom: 2%;
`;

const StyledCat = styled.div`
  font-weight: bold;
  font-size: small;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-top: 1%;
  width: 100%;
`;
const InnerBot = styled.div`
  font-weight: bold;
  font-size: regular;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 4%;
  width: 95%;
  padding: 2%;
  border-top: .5px solid black;
`;

const StyledInput = styled.input`
  width: 200px;
`;

const StyledTextArea = styled.textarea`
  width: 390px;
  height: 60px;
  resize: none;
  font-family: inherit;
`;
const StyledClose = styled.button`
  color: #1c1c1c;
  font-size: 15px;
  background-color: white;
  width: auto;
  font-weight: light;
  padding: .25em .5em;
  border-radius: 3px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;
const StyledButton = styled.button`
  width: auto;
  max-width: 100px;
  font-size: small;
  margin: 1%;
  margin-right: 3%;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

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
      characteristics: {},
      openPhotoForm: false,
      photos: [],
      photoUrls: [],
    };
    this.addReview = this.addReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.recommend = this.recommend.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.setChar = this.setChar.bind(this);
    this.setRating = this.setRating.bind(this);
    this.togglePhotoForm = this.togglePhotoForm.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
    this.addUrl = this.addUrl.bind(this);
  }

  setChar(char, rating) {
    const temp = this.state.characteristics;
    temp[char] = parseInt(rating);
    this.setState({
      characteristics: temp,
    });
  }

  closeForm() {
    window.location.reload();
  }

  addReview(e) {
    e.preventDefault();
    const reviewBody = {
      product_id: parseInt(this.props.product_id),
      rating: parseInt(this.state.rating),
      summary: this.state.summary,
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      recommend: this.state.recommend,
      characteristics: this.state.characteristics,
      photos: this.state.photoUrls,
    };
    if (!reviewBody.rating) {
      alert('please enter rating');
    } else if (reviewBody.body.length < 20) {
      alert('body must be at least 20 characters');
    } else if (!reviewBody.email) {
      alert('please enter email');
    } else if (!reviewBody.characteristics) {
      alert('please enter characteristics');
    } else if (!reviewBody.name) {
      alert('please enter nickname');
    } else {
      this.props.addReview(reviewBody);
    }
  }

  setRating(rating) {
    this.setState({ rating });
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

  togglePhotoForm() {
    !this.state.openPhotoForm
      ? this.setState({ openPhotoForm: true })
      : this.setState({ openPhotoForm: false });
  }

  addPhoto(photo) {
    if(this.state.photoUrls.length >= 5) {
      alert('you have reached the maximum number of photos');
    } else {
      let temp = [...this.state.photos, photo];
      let tempurls = [...this.state.photoUrls, URL.createObjectURL(photo).slice(5)];
      this.setState({photos: temp, photoUrls: tempurls});
    }
  }

  addUrl(url) {
    let index = this.state.photoUrls.indexOf(url)
    if (index === -1) {
      if(this.state.photoUrls.length >= 5) {
        alert('you have reached the maximum number of photos');
      } else {
        let tempurls = [...this.state.photoUrls, url];
        this.setState({photoUrls: tempurls});
      }
    } else {
      let temp = this.state.photoUrls;
      temp.splice(index, 1);
      this.setState({photoUrls: temp});
    }

  }

  render() {
    return (
      <StyledForm>
        <StyledInner>
          <InnerTop>
            <div>Write a Review.</div>
            <StyledClose onClick={this.closeForm}>X</StyledClose>
          </InnerTop>
          <StyledCat>
            <div>
              Your Rating
              <sup>*</sup>
              <StarRatingBar setRating={this.setRating} />
            </div>
          </StyledCat>
          <StyledCat>
            <div>
              Review Headline
              <sup>*</sup>
            </div>
            <StyledTextArea placeholder="Example: Best purchase ever!" name="summary" onChange={this.handleChange} />
          </StyledCat>
          <StyledCat>
            <div>
              Comments
              <sup>*</sup>
            </div>
            <StyledTextArea placeholder="Example: why did you like the product or not?" name="body" onChange={this.handleChange} />
          </StyledCat>
          <StyledCat>
            <div>
              Recommend
              <sup>*</sup>
            </div>
            <div>
              <StyledButton onClick={this.recommend}>YES</StyledButton>
              {(this.state.recommend) && (<small><em>thanks for your recommendation !</em></small>)}
            </div>

          </StyledCat>
          <StyledCat>
            Fit:
            <CharButtons char="125031" setChar={this.setChar} />
            Length:
            <CharButtons char="125032" setChar={this.setChar} />
            Comfort:
            <CharButtons char="125033" setChar={this.setChar} />
            Quality:
            <CharButtons char="125034" setChar={this.setChar} />
          </StyledCat>
          <StyledCat>
            <div>Nickname</div>
            <StyledInput placeholder="Example: snoibly123" name="name" onChange={this.handleChange} />
          </StyledCat>
          <p><em>For privacy reasons, do not use your full name or email address</em></p>
          <StyledCat>
            <div>Email*</div>
            <StyledInput placeholder="Example: snoibly@snois.com" name="email" onChange={this.handleChange} />
          </StyledCat>
          <p><em>For authentication reasons, you will not be emailed.</em></p>
          <StyledCat>
            <div>Photos</div>

            <StyledButton onClick={this.togglePhotoForm}>upload</StyledButton>
            {this.state.openPhotoForm && <PhotoForm photos={this.state.photos} addPhoto={this.addPhoto} addUrl={this.addUrl} />}
          </StyledCat>
          <InnerBot>
            <StyledButton onClick={this.addReview}>SUBMIT</StyledButton>
            <StyledButton onClick={this.closeForm}>BACK</StyledButton>
          </InnerBot>

        </StyledInner>
      </StyledForm>
    );
  }
}

export default ReviewForm;
