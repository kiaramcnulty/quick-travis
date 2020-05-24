import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders current directory text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Current Directory/i);
  expect(linkElement).toBeInTheDocument();
});
