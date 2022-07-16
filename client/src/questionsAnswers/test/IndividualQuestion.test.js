import React from 'react';
import jest from 'jest';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuestionAnswers from '../QuestionAnswers';
import Form from '../Form';


test('Form upon submit shoud pass all expected form values to props', () => {
  const formConfig = [
    {
      label: 'Your Answer',
      type: 'textarea',
      name: 'body',
      value: '',
      placeholder: '',
      mandatory: true,
    },
    {
      label: 'What is your nickname',
      type: 'text',
      name: 'name',
      value: '',
      placeholder: 'Example: jack543!',
      extra: 'For privacy reasons, do not use your full name or email address',
      mandatory: true,
    },
    {
      label: 'Your email',
      type: 'email',
      name: 'email',
      value: '',
      placeholder: 'Example: jack@email.com',
      extra: 'For authentication reasons, you will not be emailed',
      mandatory: true,
    },
    {
      label: 'Upload your photos',
      type: 'file',
      name: 'photos',
      value: [],
      placeholder: '',
    },
  ];
  const onSubmit = () => {console.log('submitted')};
  render(<Form formConfig={formConfig} id={123} header="test" submitHandler={onSubmit}/>);

  const button = screen.getByTestId('form-button-test');
  userEvent.click(button);
  console.log(screen.getByTestId('popup-test'));
  // expect(screen.getByTestId('popup-test'))

});
