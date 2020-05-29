import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WorkExperience from './WorkExperience';

describe('<WorkExperience />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<WorkExperience />);
    const workExperience = getByTestId('WorkExperience');

    expect(workExperience).toBeInTheDocument();
  });
});