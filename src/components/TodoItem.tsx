import { useDispatch } from "react-redux";
import { ITodoItemProps } from "../model/types";
import { deleteTodo, toggleStatus } from "../store/todoSlice";

export const TodoItem = ({ id, text, complited }: ITodoItemProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={complited}
          onChange={() => dispatch(toggleStatus(id))}
        />
        <span>{text}</span>
        <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
          &times;
        </span>
      </li>
    </>
  );
};
