import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from './Projects';

describe('<Projects />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Projects />);
    const projects = getByTestId('Projects');

    expect(projects).toBeInTheDocument();
  });
});