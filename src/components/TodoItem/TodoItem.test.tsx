import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

test("renders todo item with delete button", async () => {
  const state: TodoReducerState = {
    counter: 2,
    todos: [{ id: 1, text: "Hello world!" }],
    newTodo: {
      text: "",
      showError: false,
    },
  };

  const dispatch = jest.fn();

  render(
    <TodoContext.Provider value={[state, dispatch]}>
      <TodoItem todo={state.todos[0]} />
    </TodoContext.Provider>
  );

  expect(screen.getByText("Hello world!")).toBeInTheDocument();
  expect(screen.getByText("Remove")).toBeInTheDocument();

  const removeButton = await screen.findByTestId("TodoItem-remove-button");

  act(() => {
    userEvent.click(removeButton);
  });

  await waitFor(() => expect(dispatch).toBeCalledTimes(1));
});
