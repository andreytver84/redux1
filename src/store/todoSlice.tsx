import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";
import { ITodo, ITodoState } from "../model/types";

const initialState: ITodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nanoid(5),
        text: action.payload,
        complited: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => action.payload !== todo.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      ) as ITodo;
      toggledTodo.complited = !toggledTodo?.complited;
    },
  },
});

export const { addTodo, toggleTodoComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
