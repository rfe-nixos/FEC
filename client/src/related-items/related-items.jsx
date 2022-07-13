/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Promise } from 'bluebird';
import ProductList from './productList.jsx';
import OutfitList from './outfitList.jsx';


function RelatedItems() {
  const [productListStateIds, setProductListStateIds] = useState();
  const [currentProduct, setCurrentProduct] = useState('37314');
  const [relatedProductStyles, setRelatedProductStyles] = useState();
  const [relatedProduct_ids, setRelatedProduct_ids] = useState();
  const [relatedProductReviews, setRelatedProductReviews] = useState();
  //  TODO: Change default state
  //  Will need to be able to show more than the default and update accordingly
  const getStylesArr = (ids) => {
    const promises = [];
    for (let i = 0; i < ids.length; i++) {
      const config = {
        method: 'get',
        url: `${process.env.API_URL}/products/${ids[i]}/styles`,
        headers: {
          Authorization: process.env.AUTH_KEY, // TODO: Get rid of this when env is set up!!
        },
      };
      promises.push(axios(config));
    }
    Promise.all(promises)
      .then((prodObjArr) => {
        const unformattedObjArr = prodObjArr.map((prod) => prod.data);
        unformattedObjArr.map((unformattedObj) => {
          let styleArr = unformattedObj.results;
          unformattedObj.results = styleArr.filter(
            (style) => style['default?'] === true
          );
          return unformattedObj;
        });
        setRelatedProductStyles(() => unformattedObjArr);
        return unformattedObjArr;
      })
      .catch((err) => console.log('Error:', err));
  };

  // eslint-disable-next-line camelcase
  const get_idsArr = (ids) => {
    const promises = [];
    for (let i = 0; i < ids.length; i++) {
      const config = {
        method: 'get',
        url: `${process.env.API_URL}/products/${ids[i]}`,
        headers: {
          Authorization: process.env.AUTH_KEY, // TODO: Get rid of this when env is set up!!
        },
      };
      promises.push(axios(config));
    }
    Promise.all(promises)
      .then((prodObjArr) => {
        setRelatedProduct_ids(() => prodObjArr.map((product) => product.data));
        return prodObjArr.map((product) => product.data);
      })
      .catch((err) => console.log('Error:', err));
  };

  const getReviewsArr = (ids) => {
    const promises = [];
    for (let i = 0; i < ids.length; i++) {
      const config = {
        method: 'get',
        url: `${process.env.API_URL}/reviews`,
        params: {
          product_id: ids[i],
          sort: 'relevant',
        },
        headers: {
          Authorization: process.env.AUTH_KEY, // TODO: Get rid of this when env is set up!!
        },
      };
      promises.push(axios(config));
    }
    Promise.all(promises)
      .then((prodObjArr) => {
        setRelatedProductReviews(() =>
          prodObjArr.map((product) => product.data)
        );
        return prodObjArr.map((product) => product.data);
      })
      .catch((err) => console.log('Error:', err));
  };

  //  relying on the order may introduce a bug
  // const cardFormatter = (reviews, ids, styles) => {
  //   const formattedCards = [];
  //   for (let i = 0; i < ids.length; i++) {
  //     const reviewTotal = reviews[i].results.reduce(
  //       (total, item) => total + item,
  //       0,
  //     );
  //     const reviewAvg = reviewTotal / reviews[i].results.length;
  //     const formattedCard = {
  //       id: styles[i].product_id,
  //       image: styles[i].results[0].photos[0].thumbnail_url,
  //       category: ids[i].category,
  //       name: ids[i].name,
  //       price: styles[i].results[0].original_price,
  //       discountedPrice: styles[i].results[0].sale_price,
  //       rating: reviewAvg,
  //       description: ids[i].description,
  //       features: ids[i].features,
  //     };
  //     formattedCards.push(formattedCard);
  //   }
  //   setCardList(formattedCards);
  //   return formattedCards;
  // };
  //  Feeder for dummy data to setup component.
  const getProductIds = () => {
    const config = {
      method: 'get',
      url: `${process.env.API_URL}/products/${currentProduct}/related`,
      headers: {
        Authorization: process.env.AUTH_KEY, // TODO: Get rid of this when env is set up!!
      },
    };
    axios(config)
      .then((response) => {
        setProductListStateIds(response.data);
        Promise.all([
          getStylesArr(response.data),
          get_idsArr(response.data),
          getReviewsArr(response.data),
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => getProductIds(), []);
  return (
    <>
      <ProductList
        relatedProductStyles={relatedProductStyles}
        relatedProduct_ids={relatedProduct_ids}
        relatedProductReviews={relatedProductReviews}
      />
      <OutfitList />
    </>
  );
}
export default RelatedItems;
