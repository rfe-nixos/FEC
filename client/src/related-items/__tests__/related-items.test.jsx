/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RelatedItems from '../related-items.jsx';

test('should render related-items widget', () => {
  render(<RelatedItems />);
  const renderedWidget = screen.getByTestId('related-items');
  expect(renderedWidget).toBeInTheDocument();
});
test('state should start as null', () => {
  expect(RelatedItems).toBeInstanceOf(RelatedItems);
})