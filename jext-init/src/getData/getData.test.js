const axios = require('axios');
const getData = require('./getData');

jest.mock('axios'); //замокали сторонние модули

describe('getData', () => {
  let response;
  beforeEach(() => {
    //чтобы для каждого теста замокать данные
    response = {
      data: [
        { id: 1, name: 'Leanne Graham' },
        { id: 2, name: 'Ervin Howell' },
        { id: 3, name: 'Clementine Bauch' },
      ],
    };
  });
  test('Корректные значения', async () => {
    axios.get.mockReturnValue(response);
    const data = await getData();
    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual(['1', '2', '3']);
    expect(data).toMatchSnapshot();
    screen.debug();
  });
});
