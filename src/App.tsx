import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./model/types";

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
      <InputField text={text} handleText={setText} handleSubmit={addTodo} />

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoComplete={toggleTodoComplete}
      />
    </>
  );
}

export default App;
