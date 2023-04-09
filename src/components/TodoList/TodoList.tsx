import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import {
  StyledContainer,
  StyledHeader,
  StyledDoneMessage,
} from "./TodoList.styles";

const ListTodo: React.FC = () => {
  const [state] = useContext(TodoContext);
  const incompleteTodos = state.todos.filter((t) => !t.completed);
  const completedTodos = state.todos.filter((t) => t.completed);
  return (
    <>
      <StyledContainer>
        <StyledHeader>Todo</StyledHeader>
        {incompleteTodos.length > 0 ? (
          incompleteTodos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <StyledDoneMessage>Looks like your all done!</StyledDoneMessage>
        )}
      </StyledContainer>
      <StyledContainer>
        <StyledHeader>Completed</StyledHeader>
        {completedTodos.length > 0 ? (
          completedTodos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <StyledDoneMessage>
            Complete some items to fill this list out
          </StyledDoneMessage>
        )}
      </StyledContainer>
    </>
  );
};

export default ListTodo;
