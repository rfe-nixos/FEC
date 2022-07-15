import React from 'react';
import styled from 'styled-components';

function SortBar(props) {
  const sort = (e) => {
    props.setSortOption(e.target.value);
  };

  return (
    <StyledSortBar>
      {props.reviews.length} of {props.totalRatings} reviews, sorted by
      <StyledDropDown id="sort" onChange={sort}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpfulness</option>
      </StyledDropDown>
    </StyledSortBar>
  );
}

const StyledSortBar = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 15px;
`;

const StyledDropDown = styled.select`
  margin-left: 1.5%;
  font-weight: bold;
  background: white;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;
  align-self: flex-end;
  margin-bottom: .4%;
`;

export default SortBar;
