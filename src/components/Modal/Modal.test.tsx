import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';

describe('<Modal />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Modal />);
    const modal = getByTestId('Modal');

    expect(modal).toBeInTheDocument();
  });
});