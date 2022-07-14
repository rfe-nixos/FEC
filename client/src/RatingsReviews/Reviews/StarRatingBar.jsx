import React from 'react';
import styled from 'styled-components';

class StarRatingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      selected: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover(e) {
    if (!this.state.selected) {
      const r = e.target.id.slice(-1);
      for (let i = 1; i <= 5; i++) {
        const x = `star-${i}`;
        const y = document.getElementById(x);
        console.log(y);
        if (i <= parseInt(r)) {
          y.textContent = '★';
        } else {
          y.textContent = '☆';
        }
      }
    }
  }

  handleClick(e) {
    const rating = e.target.id.slice(-1);
    for (let i = 1; i <= 5; i++) {
      const x = `star-${i}`;
      const y = document.getElementById(x);
      console.log(y);
      if (i <= parseInt(rating)) {
        y.textContent = '★';
      } else {
        y.textContent = '☆';
      }
    }
    this.setState({ rating, selected: true });
    this.props.setRating(rating);
  }

  render() {
    return (
      <StarContainer>
        <Star id="star-1" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</Star>
        <Star id="star-2" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</Star>
        <Star id="star-3" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</Star>
        <Star id="star-4" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</Star>
        <Star id="star-5" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</Star>
      </StarContainer>
    );
  }
}

const StarContainer = styled.div`
  font-size: x-large;
  margin-top: 1%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
`;

const Star = styled.div`
  &:hover{
    opacity: 70%;
    cursor: pointer;
  }
`;

export default StarRatingBar;