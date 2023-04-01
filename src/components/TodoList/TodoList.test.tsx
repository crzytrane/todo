import { render, screen } from "@testing-library/react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoList from "./TodoList";

test("renders todo item with delete button", async () => {
  const state: TodoReducerState = {
    counter: 3,
    todos: [
      { id: 1, text: "Hello world!" },
      { id: 2, text: "Second todo item" },
    ],
    newTodo: {
      text: "",
      showError: false,
    },
  };

  const dispatch = jest.fn();

  render(
    <TodoContext.Provider value={[state, dispatch]}>
      <TodoList />
    </TodoContext.Provider>
  );

  expect(screen.getByText("Hello world!")).toBeInTheDocument();
  expect(screen.getByText("Second todo item")).toBeInTheDocument();
});
