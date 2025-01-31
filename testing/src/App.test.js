/* eslint-disable testing-library/prefer-presence-queries */ // Отключаем правило prefer-presence-queries
/* eslint-disable testing-library/no-debugging-utils */ // Отключаем правило no-debugging-utils
import { render, screen, fireEvent } from '@testing-library/react'; // Импортируем методы для тестирования
import userEvent from '@testing-library/user-event';
import App from './App'; // Импортируем компонент для тестирования

// describe('TEST APP', () => {
//   test('renders learn react link', () => {
//     render(<App />); // Рендерим компонент
//     const helloWorld = screen.getByText(/hello world/i); // Находим элемент с текстом "Hello world"
//     const button = screen.getByRole('button'); // Находим кнопку

//     expect(helloWorld).toBeInTheDocument(); // Проверяем, что "Hello world" есть в документе
//     expect(button).toBeInTheDocument(); // Проверяем, что кнопка есть в документе

//     // eslint-disable-next-line testing-library/no-debugging-utils
//     // screen.debug();  // Выводим текущее состояние DOM для отладки
//   });
// });

// test('renders learn react link', async () => {
//   render(<App />); // Рендерим компонент
//   // screen.debug(); // Выводим текущее состояние DOM для отладки
//   const helloWorldElem = await screen.findByText(/data/i); // Ждём элемент с текстом "data"
//   expect(helloWorldElem).toBeInTheDocument(); // Проверяем, что элемент появился
//   expect(helloWorldElem).toHaveStyle({ color: 'red' }); // Проверяем, что у элемента правильный стиль

//   // screen.debug(); // Выводим текущее состояние DOM для отладки
// });

test('CLICK CLIENT', () => {
  render(<App />); // Рендерим компонент
  // screen.debug(); // Выводим текущее состояние DOM для отладки
  const btn = screen.getByTestId('toggle-btn'); // Находим кнопку по testId
  const toggleDiv = screen.queryByTestId('toggle-elem'); // Проверяем, что элемент с toggle нет

  expect(toggleDiv).toBeNull(); // Проверяем, что toggle-elem отсутствует до клика
  fireEvent.click(btn); // Имитируем клик по кнопке

  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument(); // Проверяем, что toggle-elem появился

  fireEvent.click(btn); // Снова кликаем по кнопке
  expect(screen.queryByTestId('toggle-elem')).toBeNull(); // Проверяем, что toggle-elem исчез
});

test('INPUT EVENT', () => {
  render(<App />); // Рендерим компонент
  const input = screen.getByPlaceholderText(/input value.../i); // Находим поле ввода по плейсхолдеру
  expect(screen.queryByTestId('value-elem')).toContainHTML(''); // Проверяем, что поле пустое по умолчанию

  fireEvent.change(input, {
    // Имитируем изменение значения в поле ввода
    target: {
      value: '1234', // Устанавливаем значение
    },
  });

  expect(screen.queryByTestId('value-elem')).toContainHTML('1234'); // Проверяем, что значение обновилось
});
