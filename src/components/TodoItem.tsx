import { useDispatch } from "react-redux";
import { ITodoItemProps } from "../model/types";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

export const TodoItem = ({ id, text, complited }: ITodoItemProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={complited}
          onChange={() => dispatch(toggleTodoComplete(id))}
        />
        <span>{text}</span>
        <span className="delete" onClick={() => dispatch(removeTodo(id))}>
          &times;
        </span>
      </li>
    </>
  );
};
