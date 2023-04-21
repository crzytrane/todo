import React, { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import {
  StyledButton,
  StyledHeader,
  StyledInput,
  StyledInputContainer,
  StyledNewTodoContainer,
} from "./NewTodo.styles";

const NewTodo: React.FC = () => {
  let timeout: NodeJS.Timeout;

  const [, dispatch] = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const HandleChangeWithDebounce: React.ChangeEventHandler<
    HTMLInputElement
  > = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const inputText = inputRef.current?.value ?? "";
      dispatch({
        type: "NewTodoInputUpdated",
        currentInput: inputText,
        ref: inputRef,
      });
    }, 500);
  };

  const HandleKeydown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      const inputText = inputRef.current?.value ?? "";
      dispatch({
        type: "AddTodo",
        todo: { text: inputText },
        ref: inputRef,
      });
    }
  };

  return (
    <StyledNewTodoContainer>
      <StyledHeader>New todo</StyledHeader>
      <StyledInputContainer>
        <StyledInput
          type="text"
          ref={inputRef}
          className="mask"
          placeholder="Take out the trash"
          data-testid="NewTodo-text-input"
          onChange={HandleChangeWithDebounce}
          onKeyDown={HandleKeydown}
        />
        <StyledButton
          data-testid="NewTodo-create-button"
          onClick={() => {
            const inputText = inputRef.current?.value ?? "";
            dispatch({
              type: "AddTodo",
              todo: { text: inputText },
              ref: inputRef,
            });
          }}
        >
          Create
        </StyledButton>
      </StyledInputContainer>
    </StyledNewTodoContainer>
  );
};

export default NewTodo;
