import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../model/types";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      //console.log(state.todos);
      // console.log(action.payload);
      state.todos.push({
        id: nanoid(5),
        text: action.payload,
        complited: false,
      });
    },
    removeTodo() {},
    toggleTodoComplete() {},
  },
});

export const { addTodo, toggleTodoComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
