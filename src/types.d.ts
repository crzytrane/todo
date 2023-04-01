type Id<T = {}, I = number> = T & { id: I };
type Todo = {
  text: string;
};
type TodoEntity = Id<Todo>;

type TodoReducerState = {
  newTodo: {
    text: string;
    showError: boolean;
  };
  todos: TodoEntity[];
  counter: number;
};

type TodoReducerEventType = "AddTodo" | "RemoveTodo" | "NewTodoInputUpdated";

type TodoReducerAction =
  | {
      type: Extract<TodoReducerEventType, "RemoveTodo">;
      todo: Id;
    }
  | {
      type: Extract<TodoReducerEventType, "AddTodo">;
      todo: Todo;
      ref: React.RefObject<HTMLInputElement>;
    }
  | {
      type: Extract<TodoReducerEventType, "NewTodoInputUpdated">;
      currentInput: string;
      ref: React.RefObject<HTMLInputElement>;
    };

type TodoReducer = (
  state: TodoReducerState,
  action: TodoReducerAction
) => TodoReducerState;
