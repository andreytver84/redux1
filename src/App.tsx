import { useEffect, useState } from "react";
import "./App.css";

import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";
import { RootState } from "./model/types";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <InputField text={text} handleText={setText} handleSubmit={addTask} />
      {status === "loading" && <h2>loading...</h2>}
      {error && <h2>Hold error: {error}</h2>}
      <TodoList />
    </>
  );
}

export default App;
