import { TodoReducer } from "./TodoReducer";

describe("TodoReducer", () => {
  describe("adding items", () => {
    test("can add items", () => {
      const ref = { current: { value: "Hello world!" } } as any;
      const state: TodoReducerState = {
        counter: 1,
        todos: [],
        newTodo: {
          text: "",
          showError: false,
        },
      };
      const action: TodoReducerAction = {
        type: "AddTodo",
        ref: ref,
        todo: { text: "Hello world!" },
      };

      const result = TodoReducer(state, action);

      expect(result.counter).toBe(2);
      expect(result.todos).toHaveLength(1);
      expect(result.todos[0].id).toBe(1);
      expect(result.todos[0].text).toBe("Hello world!");
      expect(ref.current.value).toBe("");
      expect(result.newTodo.showError).toBe(false);
    });

    test("don't add empty items", () => {
      const ref = { current: { value: "" } } as any;
      const state: TodoReducerState = {
        counter: 1,
        todos: [],
        newTodo: {
          text: "",
          showError: false,
        },
      };
      const action: TodoReducerAction = {
        type: "AddTodo",
        ref: ref,
        todo: { text: "" },
      };

      const result = TodoReducer(state, action);

      expect(result.counter).toBe(1);
      expect(result.todos).toHaveLength(0);
      expect(ref.current.value).toBe("");
      expect(result.newTodo.showError).toBe(true);
    });
  });
  describe("remove items", () => {
    test("can remove an item", () => {
      const state: TodoReducerState = {
        counter: 2,
        todos: [{ id: 1, text: "Hello World!" }],
        newTodo: {
          text: "",
          showError: false,
        },
      };
      const action: TodoReducerAction = {
        type: "RemoveTodo",
        todo: { id: 1 },
      };

      const result = TodoReducer(state, action);

      expect(result.todos).toHaveLength(0);
    });
    test("wrong id doesn't remove anything", () => {
      const state: TodoReducerState = {
        counter: 2,
        todos: [{ id: 1, text: "Hello World!" }],
        newTodo: {
          text: "",
          showError: false,
        },
      };
      const action: TodoReducerAction = {
        type: "RemoveTodo",
        todo: { id: 9999 },
      };

      const result = TodoReducer(state, action);

      expect(result.todos).toHaveLength(1);
    });
  });
  describe("can update text", () => {});
});
