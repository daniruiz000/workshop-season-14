import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn ES button', () => {
  render(<App />);
  const text = screen.getByText('ES');
  expect(text).toBeInTheDocument();
});
test('renders learn EN button', () => {
  render(<App />);
  const text = screen.getByText('EN');
  expect(text).toBeInTheDocument();
});
