import { useSelector } from "react-redux";
import { ITodo, RootState } from "../model/types";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  console.log(todos);
  return (
    <>
      <ul>
        {todos.map((todo: ITodo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complited={todo.complited}
          />
        ))}
      </ul>
    </>
  );
};
