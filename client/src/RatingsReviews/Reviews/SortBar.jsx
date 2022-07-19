import React from 'react';
import styled from 'styled-components';

function SortBar(props) {
  const sort = (e) => {
    props.setSort(e.target.value);
  };

  return (
    <StyledSortBar>
      {props.page * 5}
      {' '}
      of
      {' '}
      {props.totalRatings}
      {' '}
      reviews, sorted by
      <Select id="sort" onChange={sort}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpfulness</option>
      </Select>
    </StyledSortBar>
  );
}

const StyledSortBar = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
  align-items: baseline;
`;

const Select = styled.select`
  margin-left: 1.5%;
  font-weight: bold;
  background: white;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;
  align-self: flex-end;
  margin-bottom: .1%;
`;

export default SortBar;
