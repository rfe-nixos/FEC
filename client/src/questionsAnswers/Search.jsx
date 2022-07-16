import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ setFilter }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 3) {
      setFilter(e.target.value);
    } else {
      setFilter('');
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputIcons>
        <SearchInput
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={handleChange}
          value={searchTerm}
        />
        <Icon icon={faMagnifyingGlass} />
      </InputIcons>
    </Form>
  );
}

export default Search;

const Form = styled.form`
  margin: 10px 0;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  ::placeholder {
    color: #3d3c3c;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  padding: 15px;
  left: 81vh;
`;

const InputIcons = styled.div`
  position:relative;
  width: 100%
`;
