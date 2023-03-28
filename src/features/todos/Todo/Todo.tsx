import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../todosSlice';
import style from './Todo.module.css';

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

type TodoProps = Todo;

const Todo = ({ id, task, completed }: TodoProps) => {
  const dispatch = useDispatch();
  const classes = [style.todo, completed && style.completed]
    .filter(Boolean)
    .join(' ');

  return (
    <li>
      <b className={classes} onClick={() => dispatch(toggleTodo(id))}>
        {task}
      </b>
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </li>
  );
};

export default Todo;
