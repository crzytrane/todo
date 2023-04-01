import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const EnterNewTodo = async (...todoText: string[]) => {
  const newTodoTextInput = await screen.findByTestId("NewTodo-text-input");
  const newTodoCreateButton = await screen.findByTestId(
    "NewTodo-create-button"
  );
  todoText.forEach(async (text) => {
    act(() => {
      userEvent.type(newTodoTextInput, text);
      userEvent.click(newTodoCreateButton);
    });

    const el = await waitFor(() => screen.findByText(text));

    expect(el).toBeInTheDocument();
  });
};

test("can add todos to the list", async () => {
  render(<App />);

  const newTodoTextInput = await screen.findByTestId("NewTodo-text-input");
  expect(newTodoTextInput).toBeInTheDocument();

  const newTodoCreateButton = await screen.findByTestId(
    "NewTodo-create-button"
  );
  expect(newTodoCreateButton).toBeInTheDocument();

  await EnterNewTodo("Hello world!", "Remove me later", "Some second todo");

  const removeMeElement = await screen.findByText("Remove me later");

  expect(removeMeElement).toBeInTheDocument();
});
