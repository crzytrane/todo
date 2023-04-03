import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
  filter: drop-shadow(2px 4px 2px rgb(0 0 0 / 25%));
  padding: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 1rem auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    border-radius: 4px;
  }
`;

const StyledDoneMessage = styled.div`
  color: #5c5c5c;
  padding: 0.5rem;
`;

const StyledHeader = styled.h3`
  margin: auto;
  font-weight: bold;
  color: var(--majorelle-blue);
  filter: brightness(0.5);
`;

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
