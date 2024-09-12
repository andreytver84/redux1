import { useState } from "react";
import "./App.css";

import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <InputField text={text} handleText={setText} handleSubmit={addTask} />

      <TodoList />
    </>
  );
}

export default App;
