/**
 * @jest-environment jsdom
 */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import styled from 'styled-components';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';
import ImageInput from '../ImageInput';
import '@testing-library/jest-dom/extend-expect';

const formValue = {
  body: 'abc',
  name: 'username',
  email: 'random@gmail.com',
  photos: [{file: "http://res.cloudinary.com/dl9zxpaoq/image/upload/v1658255367/cv9ghenayxntg97bh4cp.jpg"}],
};

const setFormValueMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const flushPromises = () => new Promise(resolve => {
  setTimeout(resolve, 0)
})

it('should show image', () => {
  const { getByRole } = render(
    <ImageInput
      formValue={formValue}
      setFormValue={setFormValueMock}
    />
  );

  const img = getByRole('img');
  expect(img).toBeInTheDocument();

});

it('should delete image from formValue when clicked \'x\'', async () => {
  const { getByTestId } = render(
    <ImageInput
      formValue={formValue}
      setFormValue={setFormValueMock}
    />
  );

  expect(formValue.photos.length).toBe(1);
  const deleteButton = getByTestId('delete-button');
  await userEvent.click(deleteButton);
  expect(formValue.photos.length).toBe(0);
});

// const mock = jest.fn();
// it('should set error message when uploaded image is invalid.', async () => {
//   const { getByTestId, getByText } = render(
//     <ImageInput
//       formValue={formValue}
//       setFormValue={setFormValueMock}
//       testFunc={mock}
//     />
//   );

//   const file = new File(["(⌐□_□)"], "doesntExist.png", { type: "image/png" });
//   // console.log(Boolean(file));/
//   const uploader = getByTestId("image-input");

//   await waitFor(() =>
//     fireEvent.change(uploader, {
//       target: { files: [file] },
//     })
//   );

//   await waitFor(() => expect(mock).toHaveBeenCalled());

// })