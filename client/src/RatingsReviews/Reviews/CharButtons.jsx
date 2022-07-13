import React from 'react';
import styled from 'styled-components';

class CharButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating : ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let x = document.getElementById(e.target.id);
    if (this.state.rating !== ''){
      let y = document.getElementById(this.props.char + "-" + this.state.rating);
      y.style.backgroundColor = "white";
      y.style.opacity = "100%";
    }
    x.style.backgroundColor = "grey";
    x.style.opacity = "50%";
    this.setState({rating: e.target.value});
    this.props.setChar(this.props.char, e.target.value);
  }

  render() {
    return (
      <div>
        <StyledButton id={this.props.char + "-1"} onClick={this.handleClick} value="1">1</StyledButton>
        <StyledButton id={this.props.char + "-2"} onClick={this.handleClick} value="2">2</StyledButton>
        <StyledButton id={this.props.char + "-3"} onClick={this.handleClick} value="3">3</StyledButton>
        <StyledButton id={this.props.char + "-4"} onClick={this.handleClick} value="4">4</StyledButton>
        <StyledButton id={this.props.char + "-5"} onClick={this.handleClick} value="5">5</StyledButton>
      </div>
    )
  }
}

const StyledButton = styled.button`
  width: 50px;
  height: 25px;
  font-size: small;
  margin: 0;
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

export default CharButtons;