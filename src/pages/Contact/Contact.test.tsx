import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';

describe('<Contact />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Contact />);
    const contact = getByTestId('Contact');

    expect(contact).toBeInTheDocument();
  });
});