type Id<T = {}, I = number> = T & { id: I };
type Todo = {
  text: string;
};
type TodoEntity = Id<Todo> & { completed: boolean };

type TodoReducerState = {
  newTodo: {
    text: string;
    showError: boolean;
  };
  todos: TodoEntity[];
  counter: number;
};

type TodoReducerEventType =
  | "AddTodo"
  | "RemoveTodo"
  | "NewTodoInputUpdated"
  | "MarkAsCompleted"
  | "MarkAsIncomplete";

type TodoReducerAction =
  | {
      type: Extract<
        TodoReducerEventType,
        "RemoveTodo" | "MarkAsCompleted" | "MarkAsIncomplete"
      >;
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

type Size = `${number}rem` | `${number}px`;
