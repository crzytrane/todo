import { useReducer } from "react";
import styled from "styled-components";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import { TodoReducer } from "./reducers/TodoReducer";

const StyledAppContainer = styled.div`
  min-width: 180px;
`;

function App() {
  const [state, dispatchEvent] = useReducer<TodoReducer>(TodoReducer, {
    counter: 1,
    todos: [],
    newTodo: {
      text: "",
      showError: false,
    },
  });

  return (
    <TodoContext.Provider value={[state, dispatchEvent]}>
      <StyledAppContainer>
        <header></header>
        <main>
          <NewTodo />
          <TodoList />
        </main>
      </StyledAppContainer>
    </TodoContext.Provider>
  );
}

export default App;
