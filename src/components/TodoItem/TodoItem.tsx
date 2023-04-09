import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import Checkbox from "../Checkbox/Checkbox";
import {
  StyledRemoveButton,
  StyledText,
  StyledTodoItemContainer,
} from "./TodoItem.styles";

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
