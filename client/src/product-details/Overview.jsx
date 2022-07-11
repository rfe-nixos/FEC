import React from 'react';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';

function Overview() {
  const styles = [{
    title: '',
    category: '',
    rating: 0,
    price: '$',
    overview: '',
    reviewNum: 0,
    sizes: [],
    quantity: 0,
    gallery: [],
  }];

  const currentStyle = {
    title: '',
    category: '',
    rating: 0,
    price: '$',
    overview: '',
    reviewNum: 0,
    sizes: [],
    quantity: 0,
    gallery: [],
  };

  return (
    <div>
      <div>
        <ImageGallery props={currentStyle.gallery} />
      </div>
      <div>
        <ProductDetails props={currentStyle} />
        <StyleSelector props={styles} />
        <AddToCart props={currentStyle} />
      </div>
    </div>
  );
}

export default Overview;
