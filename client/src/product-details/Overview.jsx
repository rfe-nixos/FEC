import React from 'react';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';
import ProductDetails from './ProductDetails';
import StyleSelector from './StyleSelector';
import Placeholder from './Placeholder.png';

function Overview() {
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

  return (
    <div>
      <ImageGallery props={currentStyle} />
      <ProductDetails props={currentStyle} />
      <StyleSelector props={styles} />
      <AddToCart props={currentStyle} />
    </div>
  );
}

export default Overview;
