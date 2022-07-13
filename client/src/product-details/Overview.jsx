/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OverviewStyles.css';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';
import Placeholder from './Placeholder.png';

function Overview() {
  const [product, setProduct] = useState({});

  const requestConfig1 = {
    method: 'GET',
    url: `${process.env.API_URL}/products`,
    params: {
      product_id: 12,
    },
    headers: {
      Authorization: process.env.AUTH_KEY,
    },
  };

  /* const requestConfig2 = {
    method: 'GET',
    url: `${process.env.API_URL}/products/styles`,
    params: {
      product_id: 12,
    },
    headers: {
      Authorization: process.env.AUTH_KEY,
    },
  };

    axios(requestConfig2)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log('failed fetching product styles with id 1 from API.', err);
    }); */

  const styles = [{
    title: 'Placeholder Title 1',
    category: 'Placeholder Category 1',
    rating: 3.5,
    price: '$500.00',
    overview: 'Placeholder Overview 1',
    reviewNum: 4,
    stock: { small: 5, medium: 3, large: 2 },
    gallery: [Placeholder],
    currentSize: 'Choose a Size',
    currentQuantity: 0,
  },
  {
    title: 'Placeholder Title 2',
    category: 'Placeholder Category 2',
    rating: 4.5,
    price: '$450.50',
    overview: 'Placeholder Overview 2',
    reviewNum: 7,
    stock: { small: 5, medium: 3, large: 2 },
    gallery: [Placeholder],
    currentSize: 'Choose a Size',
    currentQuantity: 0,
  }];

  const currentStyle = {
    title: 'Placeholder Title 1',
    category: 'Placeholder Category 1',
    rating: 3.5,
    price: '$500.00',
    overview: 'Placeholder Overview 1',
    reviewNum: 4,
    stock: { small: 5, medium: 3, large: 2 },
    gallery: [Placeholder, Placeholder, Placeholder, Placeholder],
    currentSize: 'Choose a Size',
    currentQuantity: 0,
  };

  function getProduct() {
    axios(requestConfig1)
      .then((result) => setProduct(result.data[0]))
      .catch((err) => {
        console.log('failed fetching product with id 1 from API.', err);
      });
  }

  useEffect(() => {
    getProduct();
  }, {});

  return (
    <div className="overview">
      <ImageGallery props={currentStyle} />
      <ProductDetails props={product} />
      <StyleSelector props={styles} />
      <AddToCart props={currentStyle} />
    </div>
  );
}

export default Overview;
