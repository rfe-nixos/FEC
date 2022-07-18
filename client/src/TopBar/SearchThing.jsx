import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchList from './SearchList.jsx';

function SearchThing({ toggleSearch }) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState('');

  const getProducts = () => {
    axios.get(`${process.env.API_URL}/products?count=100`, { // max 1011, but just get 100 for now
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched products', response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log('error fetching products', err));
  };

  const filterProducts = () => {
    const f = products
      .filter((product) => (product.name.match(new RegExp(query, 'i'))
          || product.description.match(new RegExp(query, 'i'))
          || product.category.match(new RegExp(query, 'i'))
          || product.slogan.match(new RegExp(query, 'i'))));
    setFiltered(f);
  };

  useEffect(() => {
    filterProducts();
  }, [query]);

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length >= 3) {
      setFilter(e.target.value);
    } else {
      setFilter('');
    }
  };

  const handleBgClick = (e) => {
    if (e.target.id === 'searchmain-bg') {
      toggleSearch();
    }
  };

  return (
    <StyledForm onClick={handleBgClick} id="searchmain-bg">
      <StyledInner id="searchmain-inner">
        SEARCH FOR AN ITEM HERE
        <StyledInput placeholder="i.e. shoes" name="searchthing" onChange={handleChange} />
        {(filter) && <SearchList query={filter} products={filtered} toggleSearch={toggleSearch} />}
        <StyledButton onClick={toggleSearch}>CLOSE</StyledButton>
      </StyledInner>
    </StyledForm>
  );
}

const StyledInput = styled.input`
  width: 200px;
  margin: 2%;
  transition: 1s;
  height: auto;
  font-size: 20px;
  color: #acacac;

`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: auto;
  padding: 1.5%;
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid black;
  font-size: small;
  font-weight: 500;
  letter-spacing: 0px;
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

const StyledButton = styled.button`
  width: auto;
  max-width: 100px;
  font-size: small;
  margin: 3%;
  padding: 0.25em 1em;
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

export default SearchThing;
