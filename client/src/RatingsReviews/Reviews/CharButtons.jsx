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
    console.log(e.target.value);
    this.setState({rating: e.target.value});
    this.props.setChar(this.props.char, e.target.value);
  }


  render(){
    return (
      <div>
        <StyledButton onClick={this.handleClick} value="1">1</StyledButton>
        <StyledButton onClick={this.handleClick} value="2">2</StyledButton>
        <StyledButton onClick={this.handleClick} value="3">3</StyledButton>
        <StyledButton onClick={this.handleClick} value="4">4</StyledButton>
        <StyledButton onClick={this.handleClick} value="5">5</StyledButton>
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