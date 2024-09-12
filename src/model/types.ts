export interface ITodo {
  id: string;
  text: string;
  complited: boolean;
}

// Интерфейс для состояния todos
export interface ITodoState {
  todos: ITodo[];
}

// Интерфейс для всего состояния приложения
export interface RootState {
  todos: ITodoState;
}

export interface ITodoItemProps {
  id: string;
  text: string;
  complited: boolean;
  // toggleTodoComplete: (id: string) => void;
  // removeTodo: (id: string) => void;
}
export interface IInputFieldProps {
  text: string;
  handleText: (text: string) => void;
  handleSubmit: () => void;
}
