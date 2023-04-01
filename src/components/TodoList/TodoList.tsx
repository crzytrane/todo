import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

const ListTodo: React.FC = () => {
  const [state] = useContext(TodoContext);
  return (
    <>
      {state.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default ListTodo;
