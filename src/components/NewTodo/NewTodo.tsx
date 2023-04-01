import { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const NewTodo: React.FC = () => {
  let timeout: NodeJS.Timeout;

  const [, dispatch] = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const HandleChangeWithDebounce = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const inputText = inputRef.current?.value ?? "";
      dispatch({
        type: "NewTodoInputUpdated",
        currentInput: inputText,
        ref: inputRef,
      });
    }, 500);
  };

  return (
    <>
      <div>New todo</div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Do the dishes"
        data-testid="NewTodo-text-input"
        onChange={HandleChangeWithDebounce}
      />
      <button
        data-testid="NewTodo-create-button"
        onClick={() => {
          const inputText = inputRef.current?.value ?? "";
          dispatch({
            type: "AddTodo",
            todo: { text: inputText },
            ref: inputRef,
          });
        }}
      >
        Create
      </button>
    </>
  );
};

export default NewTodo;
