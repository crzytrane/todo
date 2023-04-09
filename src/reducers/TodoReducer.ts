export const isValidTodo = (todo: Todo) => todo.text.toString().length > 0;

export const TodoReducer: TodoReducer = (
  state: TodoReducerState,
  action: TodoReducerAction
) => {
  switch (action.type) {
    case "AddTodo":
      if (isValidTodo(action.todo)) {
        if (action.ref.current) action.ref.current.value = "";
        const todo: TodoEntity = {
          ...action.todo,
          id: state.counter,
          completed: false,
        };
        const newState: TodoReducerState = {
          ...state,
          todos: [...state.todos, todo],
          counter: state.counter + 1,
        };
        return newState;
      } else {
        const addTodoState: TodoReducerState = {
          ...state,
          newTodo: { ...state.newTodo, showError: true },
        };
        return addTodoState;
      }

    case "RemoveTodo":
      const removeTodoState: TodoReducerState = {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.todo.id),
      };
      return removeTodoState;

    case "NewTodoInputUpdated":
      const showError =
        state.newTodo.showError && !isValidTodo({ text: action.currentInput });
      const newTodoInputUpdatedState: TodoReducerState = {
        ...state,
        newTodo: {
          text: action.currentInput,
          showError: showError,
        },
      };
      return newTodoInputUpdatedState;

    case "MarkAsCompleted":
      const markAsCompletedState: TodoReducerState = {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.todo.id ? { ...t, completed: true } : t
        ),
      };
      return markAsCompletedState;

    case "MarkAsIncomplete":
      const markAsIncompleteState: TodoReducerState = {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.todo.id ? { ...t, completed: false } : t
        ),
      };
      return markAsIncompleteState;

    default:
      return state;
  }
};
