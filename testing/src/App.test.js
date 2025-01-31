import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);

    expect(helloWorld).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toMatchSnapshot();

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});

test('renders learn react link', () => {
  render(<App />);
  const helloWorld = screen.queryByText(/hello2/i);
  expect(helloWorld).toBeNull();
});
