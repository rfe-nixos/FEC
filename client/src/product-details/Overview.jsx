/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OverviewStyles.css';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';

function Overview() {
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSize, setCurrentSize] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [sizeAlert, setSizeAlert] = useState('');
  const [productReviews, setProductReviews] = useState({});
  const [currentThumbnail, setCurrentThumbnail] = useState(0);

  const productId = '37311';
  const productUrl = `${process.env.API_URL}/products/${productId}`;
  const productStylesUrl = `${productUrl}/styles`;
  const productReviewsUrl = `${process.env.API_URL}/reviews/meta?product_id=${productId}`;

  const requestConfig1 = {
    method: 'GET',
    url: productUrl,
    headers: {
      Authorization: process.env.AUTH_KEY,
    },
  };

  const requestConfig2 = {
    method: 'GET',
    url: productStylesUrl,
    headers: {
      Authorization: process.env.AUTH_KEY,
    },
  };

  const requestConfig3 = {
    method: 'GET',
    url: productReviewsUrl,
    headers: {
      Authorization: process.env.AUTH_KEY,
    },
  };

  function getProduct() {
    axios(requestConfig1)
      .then((result) => setProduct(result.data))
      .catch((err) => {
        console.log('failed fetching product from API.', err);
      });
  }

  function getStyles() {
    axios(requestConfig2)
      .then((result) => {
        setStyles(result.data.results);
      })
      .catch((err) => {
        console.log('failed fetching product styles from API.', err);
      });
  }

  function getReviews() {
    axios(requestConfig3)
      .then((result) => {
        setProductReviews(result.data);
      })
      .catch((err) => {
        console.log('failed fetching product reviews from API.', err);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getStyles();
  }, []);

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    if (styles.length > 0 && Object.keys(currentStyle).length === 0) {
      setCurrentStyle(styles[0]);
    }
  });

  useEffect(() => {
    if (Object.keys(currentStyle).length > 0) {
      const thumbnails = [];
      currentStyle.photos.forEach((photo) => {
        thumbnails.push(photo.thumbnail_url);
      });
      if (!thumbnails.includes(currentImage)) {
        setCurrentImage(thumbnails[0]);
      }
    }
  });

  if (Object.keys(currentStyle).length > 0 && Object.keys(productReviews).length > 0) {
    return (
      <div className="overview">
        <ImageGallery currentStyle={currentStyle} currentImage={currentImage} setCurrentImage={setCurrentImage} currentThumbnail={currentThumbnail} setCurrentThumbnail={setCurrentThumbnail} />
        <div className="right">
          <ProductDetails product={product} currentStyle={currentStyle} productReviews={productReviews} />
          <StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
          <AddToCart currentStyle={currentStyle} currentSize={currentSize} setCurrentSize={setCurrentSize} currentAmount={currentAmount} setCurrentAmount={setCurrentAmount} sizeAlert={sizeAlert} setSizeAlert={setSizeAlert} />
        </div>
      </div>
    );
  }
}

export default Overview;
