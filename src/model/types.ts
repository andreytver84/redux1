export interface ITodo {
  id: string;
  text: string;
  complited: boolean;
}

// export interface ITodoListProps {
//   //   todos: ITodo[];
//   toggleTodoComplete: (id: string) => void;
//   removeTodo: (id: string) => void;
// }

export interface ITodoItemProps {
  id: string;
  text: string;
  complited: boolean;
  toggleTodoComplete: (id: string) => void;
  removeTodo: (id: string) => void;
}
export interface IInputFieldProps {
  text: string;
  handleText: (text: string) => void;
  handleSubmit: () => void;
}
