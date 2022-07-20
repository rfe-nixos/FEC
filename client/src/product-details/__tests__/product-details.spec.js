/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Overview from '../Overview';
import ProductDetails from '../ProductDetails';
import Modal from '../Modal';
import AddToCart from '../AddToCart';
import ImageGallery from '../ImageGallery';
import StyleSelector from '../StyleSelector';

describe('render tests', () => {
  test('Overview renders correctly', () => {
    const tree = renderer
      .create(<Overview productId="37315" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ProductDetails renders correctly', () => {
    const tree = renderer
      .create(<ProductDetails product={{}} currentStyle={{}} productReviews={{ ratings: 'example' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Modal renders correctly', () => {
    const tree = renderer
      .create(<Modal mainImage={<div></div>} galleryList={[<div></div>]} setModal={console.log()} modalZoom="" setModalZoom={console.log()} range={[0, 0]} handlePrevClick={console.log()} handleNextClick={console.log()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('StyleSelector renders correctly', () => {
    const tree = renderer
      .create(<StyleSelector styles={[]} currentStyle={{}} setCurrentStyle={console.log()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('AddToCart renders correctly', () => {
    const tree = renderer
      .create(<AddToCart currentStyle={{ skus: [] }} currentSize="" setCurrentSize={console.log()} currentAmount="" setCurrentAmount={console.log()} sizeAlert="" setSizeAlert={console.log()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ImageGallery renders correctly', () => {
    const tree = renderer
      .create(<ImageGallery currentStyle={{}} currentThumbnail={0} setCurrentThumbnail={console.log()} modal="" setModal={console.log()} zoom="" setZoom={console.log()} modalZoom="" setModalZoom={console.log()} range={[0, 7]} setRange={console.log()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('format test', () => {
  it('should have a type of object', () => {
    const component = <Overview />;
    expect(typeof component).toEqual('object');
  });
  it('should have a type of object', () => {
    const component = <ProductDetails />;
    expect(typeof component).toEqual('object');
  });
  it('should have a type of object', () => {
    const component = <ImageGallery />;
    expect(typeof component).toEqual('object');
  });
  it('should have a type of object', () => {
    const component = <Modal />;
    expect(typeof component).toEqual('object');
  });
  it('should have a type of object', () => {
    const component = <StyleSelector />;
    expect(typeof component).toEqual('object');
  });
  it('should have a type of object', () => {
    const component = <AddToCart />;
    expect(typeof component).toEqual('object');
  });
});
