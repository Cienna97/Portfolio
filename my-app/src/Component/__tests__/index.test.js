//import react
import React from 'react';

//retrieve some functions from the react testing library
import { render, cleanup } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect';

import About from '../Project';

describe('About component', () => {
      // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  })


afterEach(cleanup);