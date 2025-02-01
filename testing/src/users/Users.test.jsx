import { render, screen, fireEvent } from "@testing-library/react"; // Импортируем методы для тестирования
import axios from "axios";
import Users from "./Users";

jest.mock("axios");

describe("USERS TEST", () => {
  let response;
  beforeEach(() => {
    //чтобы для каждого теста замокать данные
    response = {
      data: [
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
        { id: 3, name: "Clementine Bauch" },
      ],
    };
  });
  test("Корректные значения", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />); // Рендерим компонент
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });
});
