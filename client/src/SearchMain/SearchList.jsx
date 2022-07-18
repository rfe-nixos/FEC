import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchTile from './SearchTile.jsx';

function SearchList({ products, query, toggleSearch }) {
  const filteredProducts = products
    .filter((product) => {
      product.name.match(new RegExp(query, 'i'));
    });

  useEffect(() => {
    console.log('search list loaded');
  }, [])

  return (
    <div>
      search list here
      {(products.map((product, index) => {
        return <SearchTile product={product} key={index} toggleSearch={toggleSearch}/>
      }))}
    </div>

  );
}

export default SearchList;
