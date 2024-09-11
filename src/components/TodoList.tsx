import { useSelector } from "react-redux";
import { ITodo } from "../model/types";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
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
            // toggleTodoComplete={toggleTodoComplete}
            // removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
};
