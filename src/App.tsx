import { useReducer } from "react";
import TodoList from "./components/TodoList/TodoList";
import NewTodo from "./components/NewTodo/NewTodo";
import { TodoContext } from "./contexts/TodoContext";
import { TodoReducer } from "./reducers/TodoReducer";

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
      <div>
        <header></header>
        <main>
          <NewTodo />
          <TodoList />
        </main>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
