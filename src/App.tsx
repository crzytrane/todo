import { useCallback, useReducer } from "react";
import styled from "styled-components";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TodoReducer } from "./reducers/TodoReducer";

const StyledAppContainer = styled.div`
  min-width: 180px;
`;

function App() {
  const [statePersisted, setStatePersisted] = useLocalStorage("todos", {
    counter: 1,
    todos: [],
    newTodo: {
      text: "",
      showError: false,
    },
  });

  const wrappedReducer = useCallback(
    (state: TodoReducerState, action: TodoReducerAction) => {
      const newState = TodoReducer(state, action);

      setStatePersisted(newState);

      return newState;
    },
    [setStatePersisted]
  );

  const [state, dispatchEvent] = useReducer<TodoReducer>(
    wrappedReducer,
    statePersisted
  );

  return (
    <TodoContext.Provider value={[state, dispatchEvent]}>
      <StyledAppContainer>
        <NewTodo />
        <TodoList />
      </StyledAppContainer>
    </TodoContext.Provider>
  );
}

export default App;
