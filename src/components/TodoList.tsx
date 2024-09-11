import { ITodo, ITodoListProps } from "../model/types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  toggleTodoComplete,
  removeTodo,
}: ITodoListProps) => {
  return (
    <>
      <ul>
        {todos.map((todo: ITodo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complited={todo.complited}
            toggleTodoComplete={toggleTodoComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
};
