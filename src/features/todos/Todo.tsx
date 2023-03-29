import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './todosSlice';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

type TodoProps = Todo;

const Todo = ({ id, task, completed }: TodoProps) => {
  const dispatch = useDispatch();

  return (
    <li>
      <b onClick={() => dispatch(toggleTodo(id))}>{task}</b>
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </li>
  );
};

export default Todo;
