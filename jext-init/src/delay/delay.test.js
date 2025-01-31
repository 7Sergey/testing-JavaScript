const delay = require('./delay');

describe('dalay', () => {
  test('Корректное значение', async () => {
    const sum = await delay(() => 5 + 5, 2000);
    expect(sum).toBe(10);
  });
});
