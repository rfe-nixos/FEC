import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchTile from './SearchTile.jsx';

function SearchList({ products, query, toggleSearch }) {
  useEffect(() => {
    console.log('search list loaded');
  }, []);

  return (
    <StyledList>
      {(products.map((product, index) => <SearchTile product={product} key={index} toggleSearch={toggleSearch} />))}
    </StyledList>

  );
}

const StyledList = styled.div`
  margin: 2%;
  max-height: 300px;
  max-width: 50%;
  overflow-y: auto;
`;

export default SearchList;
