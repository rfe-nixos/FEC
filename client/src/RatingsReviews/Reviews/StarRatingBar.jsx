import React from 'react';
import styled from 'styled-components';

class StarRatingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      selected: false
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover(e) {
    let r = e.target.id.slice(-1);
    console.log(r);
    for(let i = 1; i <= 5; i++){
      let x = 'star-' + i;
      //console.log(x);
      var y = document.getElementById(x);
      console.log(y);
      if (i <= parseInt(r)) {
        y.textContent = '★';
      } else {
        y.textContent = '☆';
      }

    }
  }

  handleClick(e) {
    let rating = e.target.id.slice(-1);
    console.log(rating);
    this.setState({rating: rating, selected: true});

  }

  render() {
    return (
      <StarContainer>
        <div id="star-1" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</div>
        <div id="star-2" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</div>
        <div id="star-3" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</div>
        <div id="star-4" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</div>
        <div id="star-5" onMouseOver={this.handleHover} onClick={this.handleClick}>☆</div>
      </StarContainer>
    )
  }
}

const StarContainer = styled.div`
  font-size: small;
  margin-top: 3%;
  display: flex;
  flex-direction: row;
`

const OuterStar = styled.div`
  display: inline-block;
  position: relative;
  &:before {
    content: "☆☆☆☆☆";
  }
`

const InnerStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${props => props.width};
  &:before {
    content: "★★★★★";
  }
`


export default StarRatingBar;