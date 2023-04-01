import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

type Props = {
  todo: Id<Todo>;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [, dispatch] = useContext(TodoContext);
  const RemoveHandler = () => {
    dispatch({ type: "RemoveTodo", todo });
  };
  return (
    <div className="container">
      <div key={todo.id}>{todo.text}</div>
      <button data-testid="TodoItem-remove-button" onClick={RemoveHandler}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
