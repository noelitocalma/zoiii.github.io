import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from './Loader';

describe('<Loader />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('Loader');

    expect(loader).toBeInTheDocument();
  });
});