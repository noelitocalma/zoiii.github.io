import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from './Skills';

describe('<Skills />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Skills />);
    const skills = getByTestId('Skills');

    expect(skills).toBeInTheDocument();
  });
});