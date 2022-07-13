import React from 'react';
import styled from 'styled-components';

function SortBar(props) {
  const sort = (e) => {
    props.sort(e.target.value);
  }

  return (
    <StyledSortBar>
      {props.reviews.length} of {props.totalRatings} reviews, sorted by
      <StyledDropDown id="sort" onChange={sort}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpfulness</option>
      </StyledDropDown>
    </StyledSortBar>
  )
}

const StyledSortBar = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  align-
`

const StyledDropDown = styled.select`
  margin-left: 2%;
  font-weight: bold;
  background: white;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;
  align-self: flex-end;
  margin-bottom: 3%;
`

export default SortBar;