const mapArrToString = require('./mapArrToString');

describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']); //toEqual - равно содерржимое(для ссылочных типов данных)
  });
  test('Мешанина', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, '12'])).toEqual([
      '1',
      '2',
      '3',
    ]);
  });
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test('Отрицание', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3]);
  });
});
