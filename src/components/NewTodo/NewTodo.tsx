import { useContext, useRef } from "react";
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

  const HandleChangeWithDebounce = () => {
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
  return (
    <StyledNewTodoContainer>
      <StyledHeader>New todo</StyledHeader>
      <StyledInputContainer>
        <StyledInput
          type="text"
          ref={inputRef}
          placeholder="Take out the trash"
          data-testid="NewTodo-text-input"
          onChange={HandleChangeWithDebounce}
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
