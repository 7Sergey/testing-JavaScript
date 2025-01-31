const square = require('./square.js');

describe('square', () => {
  let mockValue;

  // beforeEach вызывается перед каждым тестом
  beforeEach(() => {
    // Добавили данные в базу данных
  });

  // beforeAll вызовется один раз перед всеми тестами
  beforeAll(() => {
    mockValue = Math.random();
    console.log(mockValue);
  });
  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow'); // метод pow у Math отслеживаем
    square(2);
    expect(spyMathPow).toBeCalledTimes(1); //будет вызван 1 раз
  });
  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0); //будет вызван 0 раз
  });

  // beforeEach вызывается ПОСЛЕ каждого теста
  afterEach(() => {
    jest.clearAllMocks(); //удаляем моки после каждого теста, так как они копятся
  });

  // beforeAll вызовется один раз ПОСЛЕ всех тестов
  afterAll(() => {
    // Удалили все данные из базы данных
  });
});
