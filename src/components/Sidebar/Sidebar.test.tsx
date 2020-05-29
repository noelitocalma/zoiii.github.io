import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Sidebar />);
    const sidebar = getByTestId('Sidebar');

    expect(sidebar).toBeInTheDocument();
  });
});