import { ITodoItemProps } from "../model/types";

export const TodoItem = ({
  id,
  text,
  complited,
  toggleTodoComplete,
  removeTodo,
}: ITodoItemProps) => {
  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={complited}
          onChange={() => toggleTodoComplete(id)}
        />
        <span>{text}</span>
        <span className="delete" onClick={() => removeTodo(id)}>
          &times;
        </span>
      </li>
    </>
  );
};
