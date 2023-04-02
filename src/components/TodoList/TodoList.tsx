import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
  filter: drop-shadow(2px 4px 2px rgb(0 0 0 / 25%));
  border-radius: 4px;
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

const ListTodo: React.FC = () => {
  const [state] = useContext(TodoContext);
  return (
    <StyledContainer>
      {state.todos.length > 0 ? (
        state.todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <StyledDoneMessage>Looks like your all done!</StyledDoneMessage>
      )}
    </StyledContainer>
  );
};

export default ListTodo;
