import { createSlice, nanoid } from '@reduxjs/toolkit';
import Todo from './Todo';
import type { Selector } from '@reduxjs/toolkit';

const initialState: Todo[] = [
  {
    id: nanoid(),
    task: 'Create some todos',
    completed: false,
  },
  {
    id: nanoid(),
    task: 'Complete all todos',
    completed: false,
  },
  {
    id: nanoid(),
    task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
     consectetur animi inventore impedit, sequi numquam consequatur,
      perspiciatis alias voluptas voluptatum repellat aliquid labore.`,
    completed: false,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };

      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

const selectTodos: Selector<{ todos: Todo[] }, Todo[]> = (state) => state.todos;

export default todosSlice.reducer;
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export { selectTodos };
