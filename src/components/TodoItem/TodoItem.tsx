import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import styled from "styled-components";
import Checkbox from "../Checkbox/Checkbox";

const StyledTodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  &:first-child {
    padding-top: 0.2rem;
  }
  &:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: #e7e7e7 solid 1px;
  }
  &:last-child {
    padding-bottom: 0.2rem;
  }
`;

const StyledRemoveButton = styled.button`
  border: 0;
  background: transparent;
  color: grey;
  &:hover {
    color: darkred;
  }
`;

const StyledText = styled.div<{ completed: boolean }>`
  flex-grow: 1;
  ${(props) => props.completed && "text-decoration: line-through"};
`;

type Props = {
  todo: Id<TodoEntity>;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [, dispatch] = useContext(TodoContext);
  const RemoveHandler = () => {
    dispatch({ type: "RemoveTodo", todo });
  };

  const markCompleted = () => {
    dispatch({ type: "MarkAsCompleted", todo });
  };

  const markIncomplete = () => {
    dispatch({ type: "MarkAsIncomplete", todo });
  };

  const CheckboxClickHandler = todo.completed ? markIncomplete : markCompleted;

  return (
    <StyledTodoItemContainer>
      <Checkbox selected={todo.completed} handleClick={CheckboxClickHandler} />
      <StyledText key={todo.id} completed={todo.completed}>
        {todo.text}
      </StyledText>
      <StyledRemoveButton
        data-testid="TodoItem-remove-button"
        onClick={RemoveHandler}
      >
        Delete
      </StyledRemoveButton>
    </StyledTodoItemContainer>
  );
};

export default TodoItem;
