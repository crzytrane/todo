import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoContext } from "../../contexts/TodoContext";
import NewTodo from "./NewTodo";

test("can enter text and click Create", async () => {
  const state: TodoReducerState = {
    counter: 1,
    todos: [],
    newTodo: {
      text: "",
      showError: false,
    },
  };

  const dispatch = jest.fn();

  render(
    <TodoContext.Provider value={[state, dispatch]}>
      <NewTodo />
    </TodoContext.Provider>
  );

  expect(screen.getByText("New todo")).toBeInTheDocument();

  const input = await screen.findByTestId("NewTodo-text-input");
  const button = await screen.findByTestId("NewTodo-create-button");

  act(() => {
    userEvent.type(input, "Hello world!", { delay: 1 });
  });

  await waitFor(() => expect(dispatch).toBeCalledTimes(1));

  dispatch.mockReset();

  act(() => {
    userEvent.click(button);
  });

  await waitFor(() => expect(dispatch).toBeCalledTimes(1));
});
