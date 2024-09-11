import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

interface ITodo {
  id: string;
  text: string;
  complited: boolean;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: nanoid(5),
          text,
          complited: false,
        },
      ]);
      setText("");
    }
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoComplete = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (id !== todo.id) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        };
      })
    );
  };

  return (
    <>
      <label>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complited}
              onChange={() => toggleTodoComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <span className="delete" onClick={() => removeTodo(todo.id)}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
