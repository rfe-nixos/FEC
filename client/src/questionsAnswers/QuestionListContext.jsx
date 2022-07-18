// const [questionList, setQuestionList] = useState([]);
// const [filteredKeyword, setFilteredKeyword] = useState('');
// const [productInfo, setProductInfo] = useState({});

import React, { useState, useContext } from 'react';

const QuestionListContext = React.createContext();
const KeywordContext = React.createContext();
const ProductInfo