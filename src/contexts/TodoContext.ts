import { createContext } from "react";

export const TodoContext = createContext<
  [TodoReducerState, React.Dispatch<TodoReducerAction>]
>([{} as any, () => {}]);
