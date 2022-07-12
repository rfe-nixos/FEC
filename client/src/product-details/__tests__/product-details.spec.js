/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProductDetails from '../ProductDetails';

describe('currentStyle', () => {
  test('it should have a length of one', () => {
    const currentStyle = {
      title: 'Placeholder Title 1',
      category: 'Placeholder Category 1',
      rating: 3.5,
      price: '$500.00',
      overview: 'Placeholder Overview 1',
      reviewNum: 4,
      stock: { small: 5, medium: 3, large: 2 },
      gallery: [],
      currentSize: 'Choose a Size',
      currentQuantity: 0,
    };

    const keys = Object.keys(currentStyle);

    expect(keys.length).toEqual(10);
  });
});

it('should have a type of objecy', () => {
  const component = <ProductDetails />;

  expect(typeof component).toEqual('object');
});
