/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');

    expect(helloWorld).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();
  });
});

test('renders learn react link', async () => {
  render(<App />);
  // const helloWorldElem = screen.queryByText(/hello2/i);
  // expect(helloWorldElem).toBeNull();

  screen.debug();
  const helloWorldElem = await screen.findByText(/data/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(helloWorldElem).toHaveStyle({ color: 'red' });

  screen.debug();
});

test('CLICK CLIENT', () => {
  render(<App />);
  // const helloWorldElem = screen.queryByText(/hello2/i);
  // expect(helloWorldElem).toBeNull();

  screen.debug();
  const btn = screen.getByTestId('toggle-btn');
  const toggleDiv = screen.queryByTestId('toggle-elem');
  expect(toggleDiv).toBeNull();
  fireEvent.click(btn);

  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.queryByTestId('toggle-elem')).toBeNull();
});

test('INPUT EVENT', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/input value.../i);
  expect(screen.queryByTestId('value-elem')).toContainHTML('');
  fireEvent.change(input, {
    target: {
      value: '1234',
    },
  });
  expect(screen.queryByTestId('value-elem')).toContainHTML('1234');
});
