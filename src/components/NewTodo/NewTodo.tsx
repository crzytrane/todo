import { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import styled from "styled-components";

const StyledNewTodoContainer = styled.div`
  margin: 0 auto;
  background-color: var(--majorelle-blue);
  padding: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    border-radius: 0 0 4px 4px;
  }
`;

const StyledHeader = styled.h2`
  flex-basis: 100%;
  text-align: center;
  color: var(--text-light);
  margin-bottom: 1rem;
`;

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  @media screen and (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 4px;
  border: 0;
  width: 100%;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  border: var(--purpureus) solid 2px;
  background-color: var(--purpureus);
  color: var(--text-light);
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.6);
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 2rem;
  }
`;

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
