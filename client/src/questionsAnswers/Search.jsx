import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchInput = styled.input`
  padding: 15px;
  width: 100%;
  ::placeholder {
    color: #3d3c3c;
    font-weight: bold;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 100%;
  top: 4.5px;
  padding-top: 12px;
`;

const InputIcons = styled.div`
  position:relative;
  width: 100%
`;

// handle the change of input
function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  return (
    <form onSubmit={handleSubmit}>
      <InputIcons>
        <SearchInput type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange} value={searchTerm} />
        <Icon icon={faMagnifyingGlass} />
      </InputIcons>
    </form>
  );
}

export default Search;
