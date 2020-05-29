import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Events from './Events';

describe('<Events />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Events />);
    const events = getByTestId('Events');

    expect(events).toBeInTheDocument();
  });
});