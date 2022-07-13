import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import Reviews from '../Reviews';

test('should render Reviews component', () => {
  const ReviewsElement = renderer.create(<Reviews />);
  expect(typeof ReviewsElement).toEqual('object');
})

test('renders correctly', () => {
  const tree = renderer
    .create(<Reviews />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

